package providers

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"

	"github.com/jaytaylor/go-hostsfile"

	"github.com/pydio/cells/common/config"
	"github.com/pydio/cells/common/proto/install"
	"github.com/pydio/cells/common/utils/net"
)

var cache *MkCertCache

func init() {
	cache = &MkCertCache{
		data: make(map[string]*pair),
		lock: &sync.Mutex{},
	}
}

type pair struct {
	cert string
	key  string
}

type MkCertCache struct {
	lock *sync.Mutex
	data map[string]*pair
}

func GetMkCertCache() *MkCertCache {
	return cache
}

func (m *MkCertCache) Uuid(hosts []string) string {
	sort.Strings(hosts)
	hh := strings.Join(hosts, "##")
	hash := md5.New()
	hash.Write([]byte(hh))
	return hex.EncodeToString(hash.Sum(nil))
}

func (m *MkCertCache) LoadCertificates(config *install.ProxyConfig) (certFile string, keyFile string, err error) {
	hosts := m.loadHosts(config)
	uuid := cache.Uuid(hosts)
	cache.lock.Lock()
	defer cache.lock.Unlock()
	if p, o := cache.data[uuid]; o {
		return p.cert, p.key, nil
	} else {
		certFile, keyFile, err = cache.findOrGenerate(uuid, hosts)
		if err == nil {
			cache.data[uuid] = &pair{cert: certFile, key: keyFile}
		}
		return
	}
}

func (m *MkCertCache) loadHosts(site *install.ProxyConfig) []string {
	hns := site.GetSelfSigned().GetHostnames()
	if len(hns) == 0 {
		bindAll := false
		// get hosts from default
		for _, bind := range site.Binds {
			u, err := url.Parse("https://" + bind)
			if err != nil {
				continue
			}
			bindHost := u.Hostname()
			if bindHost == "0.0.0.0" || bindHost == "" {
				bindAll = true
			} else {
				hns = append(hns, bindHost)
			}
		}
		if bindAll {
			// Special case for 0.0.0.0 => use all interfaces and external
			ii, _ := net.GetAvailableIPs()
			for _, i := range ii {
				hns = append(hns, i.String())
			}
			if other, e := hostsfile.ReverseLookup("127.0.0.1"); e == nil && len(other) > 0 {
				hns = append(hns, other...)
			}
		}
	}
	return hns
}

func (m *MkCertCache) findOrGenerate(uuid string, hns []string) (certFile, keyFile string, err error) {
	storageLocation := filepath.Join(config.ApplicationWorkingDir(), "certs")
	os.MkdirAll(storageLocation, 0700)
	mk := NewMkCert(storageLocation)
	cn := filepath.Join(storageLocation, uuid+".pem")
	kn := filepath.Join(storageLocation, uuid+"-key.pem")
	_, e1 := os.Stat(cn)
	_, e2 := os.Stat(kn)
	if e1 == nil && e2 == nil {
		certFile = cn
		keyFile = kn
		return
	}

	err = mk.MakeCert(hns, uuid)
	if err != nil {
		return
	}
	certFile, keyFile, _, _ = mk.GeneratedResources()

	fmt.Println("")
	fmt.Println("")
	fmt.Println("👉 If you are behind a reverse proxy, you can either install the RootCA on the proxy machine " +
		"trust store, or configure your proxy to `insecure_skip_verify` for pointing to Cells.")
	fmt.Println("👉 If you are developing locally, you may install the RootCA in your system trust store to " +
		"see a green light in your browser!")
	fmt.Println("🗒  To easily install the RootCA in your trust store, use https://github.com/FiloSottile/mkcert. " +
		"Set the $CAROOT environment variable to the rootCA folder then use 'mkcert -install'")
	fmt.Println("")

	return
}
