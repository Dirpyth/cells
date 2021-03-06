// Code generated by protoc-gen-go. DO NOT EDIT.
// source: templates.proto

package rest

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import service "github.com/pydio/cells/common/service/proto"
import tree "github.com/pydio/cells/common/proto/tree"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// A template node is representing a file or a folder
type TemplateNode struct {
	// Whether it's a file or a folder
	IsFile bool `protobuf:"varint,1,opt,name=IsFile" json:"IsFile,omitempty"`
	// If stored in binary store, the binary Uuid
	BinaryUUUID string `protobuf:"bytes,2,opt,name=BinaryUUUID" json:"BinaryUUUID,omitempty"`
	// If it's embedded in binary
	EmbedPath string `protobuf:"bytes,3,opt,name=EmbedPath" json:"EmbedPath,omitempty"`
	// One or more children
	Children []*TemplateNode `protobuf:"bytes,4,rep,name=Children" json:"Children,omitempty"`
}

func (m *TemplateNode) Reset()                    { *m = TemplateNode{} }
func (m *TemplateNode) String() string            { return proto.CompactTextString(m) }
func (*TemplateNode) ProtoMessage()               {}
func (*TemplateNode) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{0} }

func (m *TemplateNode) GetIsFile() bool {
	if m != nil {
		return m.IsFile
	}
	return false
}

func (m *TemplateNode) GetBinaryUUUID() string {
	if m != nil {
		return m.BinaryUUUID
	}
	return ""
}

func (m *TemplateNode) GetEmbedPath() string {
	if m != nil {
		return m.EmbedPath
	}
	return ""
}

func (m *TemplateNode) GetChildren() []*TemplateNode {
	if m != nil {
		return m.Children
	}
	return nil
}

// A template can be used to create files or tree from scratch
type Template struct {
	// Unique identifier for this template
	UUID string `protobuf:"bytes,1,opt,name=UUID" json:"UUID,omitempty"`
	// Human friendly label
	Label string `protobuf:"bytes,2,opt,name=Label" json:"Label,omitempty"`
	// Template node, can be a file or a tree of folders
	Node *TemplateNode `protobuf:"bytes,3,opt,name=Node" json:"Node,omitempty"`
	// Associated policies
	Policies []*service.ResourcePolicy `protobuf:"bytes,4,rep,name=Policies" json:"Policies,omitempty"`
}

func (m *Template) Reset()                    { *m = Template{} }
func (m *Template) String() string            { return proto.CompactTextString(m) }
func (*Template) ProtoMessage()               {}
func (*Template) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{1} }

func (m *Template) GetUUID() string {
	if m != nil {
		return m.UUID
	}
	return ""
}

func (m *Template) GetLabel() string {
	if m != nil {
		return m.Label
	}
	return ""
}

func (m *Template) GetNode() *TemplateNode {
	if m != nil {
		return m.Node
	}
	return nil
}

func (m *Template) GetPolicies() []*service.ResourcePolicy {
	if m != nil {
		return m.Policies
	}
	return nil
}

type ListTemplatesRequest struct {
}

func (m *ListTemplatesRequest) Reset()                    { *m = ListTemplatesRequest{} }
func (m *ListTemplatesRequest) String() string            { return proto.CompactTextString(m) }
func (*ListTemplatesRequest) ProtoMessage()               {}
func (*ListTemplatesRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{2} }

type ListTemplatesResponse struct {
	Templates []*Template `protobuf:"bytes,1,rep,name=Templates" json:"Templates,omitempty"`
}

func (m *ListTemplatesResponse) Reset()                    { *m = ListTemplatesResponse{} }
func (m *ListTemplatesResponse) String() string            { return proto.CompactTextString(m) }
func (*ListTemplatesResponse) ProtoMessage()               {}
func (*ListTemplatesResponse) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{3} }

func (m *ListTemplatesResponse) GetTemplates() []*Template {
	if m != nil {
		return m.Templates
	}
	return nil
}

type CreateFromTemplateRequest struct {
	TemplateUUID string     `protobuf:"bytes,1,opt,name=TemplateUUID" json:"TemplateUUID,omitempty"`
	TargetNode   *tree.Node `protobuf:"bytes,2,opt,name=TargetNode" json:"TargetNode,omitempty"`
}

func (m *CreateFromTemplateRequest) Reset()                    { *m = CreateFromTemplateRequest{} }
func (m *CreateFromTemplateRequest) String() string            { return proto.CompactTextString(m) }
func (*CreateFromTemplateRequest) ProtoMessage()               {}
func (*CreateFromTemplateRequest) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{4} }

func (m *CreateFromTemplateRequest) GetTemplateUUID() string {
	if m != nil {
		return m.TemplateUUID
	}
	return ""
}

func (m *CreateFromTemplateRequest) GetTargetNode() *tree.Node {
	if m != nil {
		return m.TargetNode
	}
	return nil
}

type CreateFromTemplateResponse struct {
	Success bool       `protobuf:"varint,1,opt,name=Success" json:"Success,omitempty"`
	Node    *tree.Node `protobuf:"bytes,2,opt,name=Node" json:"Node,omitempty"`
}

func (m *CreateFromTemplateResponse) Reset()                    { *m = CreateFromTemplateResponse{} }
func (m *CreateFromTemplateResponse) String() string            { return proto.CompactTextString(m) }
func (*CreateFromTemplateResponse) ProtoMessage()               {}
func (*CreateFromTemplateResponse) Descriptor() ([]byte, []int) { return fileDescriptor10, []int{5} }

func (m *CreateFromTemplateResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func (m *CreateFromTemplateResponse) GetNode() *tree.Node {
	if m != nil {
		return m.Node
	}
	return nil
}

func init() {
	proto.RegisterType((*TemplateNode)(nil), "rest.TemplateNode")
	proto.RegisterType((*Template)(nil), "rest.Template")
	proto.RegisterType((*ListTemplatesRequest)(nil), "rest.ListTemplatesRequest")
	proto.RegisterType((*ListTemplatesResponse)(nil), "rest.ListTemplatesResponse")
	proto.RegisterType((*CreateFromTemplateRequest)(nil), "rest.CreateFromTemplateRequest")
	proto.RegisterType((*CreateFromTemplateResponse)(nil), "rest.CreateFromTemplateResponse")
}

func init() { proto.RegisterFile("templates.proto", fileDescriptor10) }

var fileDescriptor10 = []byte{
	// 391 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x52, 0x51, 0x8b, 0xd3, 0x40,
	0x10, 0x26, 0x77, 0xf1, 0x4c, 0xe7, 0x44, 0x61, 0x39, 0xcf, 0x58, 0x44, 0x42, 0x1e, 0xa4, 0x88,
	0x6c, 0xc0, 0xbe, 0xf8, 0xec, 0xd9, 0x42, 0xa1, 0x48, 0x89, 0xad, 0xef, 0xc9, 0x66, 0x68, 0x17,
	0x93, 0x6c, 0xdc, 0xdd, 0x08, 0xfd, 0x19, 0xbe, 0xf8, 0x7b, 0xa5, 0x93, 0x6d, 0x9a, 0x6a, 0xb9,
	0x97, 0x90, 0xf9, 0x66, 0xbe, 0xf9, 0xbe, 0xfd, 0x76, 0xe1, 0x85, 0xc5, 0xaa, 0x29, 0x33, 0x8b,
	0x86, 0x37, 0x5a, 0x59, 0xc5, 0x7c, 0x8d, 0xc6, 0x8e, 0x3f, 0x6d, 0xa5, 0xdd, 0xb5, 0x39, 0x17,
	0xaa, 0x4a, 0x9a, 0x7d, 0x21, 0x55, 0x22, 0xb0, 0x2c, 0x4d, 0x22, 0x54, 0x55, 0xa9, 0x3a, 0x31,
	0xa8, 0x7f, 0x49, 0x81, 0x09, 0x51, 0x1c, 0xd8, 0xf1, 0xc7, 0xd3, 0xc7, 0x99, 0x1d, 0xc3, 0x6a,
	0x44, 0xfa, 0x74, 0xa4, 0xf8, 0x8f, 0x07, 0xcf, 0xd6, 0xce, 0xc8, 0x57, 0x55, 0x20, 0xbb, 0x87,
	0x9b, 0x85, 0x99, 0xcb, 0x12, 0x43, 0x2f, 0xf2, 0x26, 0x41, 0xea, 0x2a, 0x16, 0xc1, 0xed, 0x67,
	0x59, 0x67, 0x7a, 0xbf, 0xd9, 0x6c, 0x16, 0x5f, 0xc2, 0xab, 0xc8, 0x9b, 0x8c, 0xd2, 0x21, 0xc4,
	0xde, 0xc0, 0x68, 0x56, 0xe5, 0x58, 0xac, 0x32, 0xbb, 0x0b, 0xaf, 0xa9, 0x7f, 0x02, 0x18, 0x87,
	0xe0, 0x61, 0x27, 0xcb, 0x42, 0x63, 0x1d, 0xfa, 0xd1, 0xf5, 0xe4, 0xf6, 0x23, 0xe3, 0x87, 0x03,
	0xf3, 0xa1, 0x7a, 0xda, 0xcf, 0xc4, 0xbf, 0x3d, 0x08, 0x8e, 0x2d, 0xc6, 0xc0, 0x27, 0x55, 0x8f,
	0xb6, 0xd2, 0x3f, 0xbb, 0x83, 0x27, 0xcb, 0x2c, 0xc7, 0xd2, 0x59, 0xe9, 0x0a, 0xf6, 0x0e, 0xfc,
	0xc3, 0x22, 0xd2, 0xbf, 0x2c, 0x41, 0x7d, 0x36, 0x85, 0x60, 0xa5, 0x4a, 0x29, 0x24, 0x1a, 0x67,
	0xe7, 0x15, 0x77, 0xd9, 0xf2, 0x14, 0x8d, 0x6a, 0xb5, 0x40, 0x1a, 0xd8, 0xa7, 0xfd, 0x60, 0x7c,
	0x0f, 0x77, 0x4b, 0x69, 0xec, 0x71, 0x9d, 0x49, 0xf1, 0x67, 0x8b, 0xc6, 0xc6, 0x33, 0x78, 0xf9,
	0x0f, 0x6e, 0x1a, 0x55, 0x1b, 0x64, 0x1f, 0x60, 0xd4, 0x83, 0xa1, 0x47, 0x32, 0xcf, 0xcf, 0x2d,
	0xa5, 0xa7, 0x81, 0xf8, 0x07, 0xbc, 0x7e, 0xd0, 0x98, 0x59, 0x9c, 0x6b, 0x55, 0xf5, 0x03, 0x9d,
	0x06, 0x8b, 0x4f, 0xf7, 0x34, 0x88, 0xe2, 0x0c, 0x63, 0xef, 0x01, 0xd6, 0x99, 0xde, 0xa2, 0xa5,
	0x08, 0xae, 0x28, 0x02, 0xe0, 0x74, 0xdb, 0x74, 0xf4, 0x41, 0x37, 0xfe, 0x0e, 0xe3, 0x4b, 0x62,
	0xce, 0x78, 0x08, 0x4f, 0xbf, 0xb5, 0x42, 0xa0, 0x31, 0xee, 0x19, 0x1c, 0x4b, 0xf6, 0xd6, 0x05,
	0xfc, 0xff, 0x76, 0xc2, 0xf3, 0x1b, 0x7a, 0x57, 0xd3, 0xbf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x69,
	0x11, 0x08, 0x0d, 0xdf, 0x02, 0x00, 0x00,
}
