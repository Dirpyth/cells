/*
 * Copyright 2007-2017 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _utilMixins = require('../util/Mixins');

var _AdminLeftNav = require('./AdminLeftNav');

var _AdminLeftNav2 = _interopRequireDefault(_AdminLeftNav);

var _materialUi = require('material-ui');

var _materialUiStyles = require('material-ui/styles');

var _pydioModelDataModel = require('pydio/model/data-model');

var _pydioModelDataModel2 = _interopRequireDefault(_pydioModelDataModel);

var _pydioHttpResourcesManager = require('pydio/http/resources-manager');

var _pydioHttpResourcesManager2 = _interopRequireDefault(_pydioHttpResourcesManager);

var _pydioUtilDom = require('pydio/util/dom');

var _pydioUtilDom2 = _interopRequireDefault(_pydioUtilDom);

var _stylesAdminStyles = require("../styles/AdminStyles");

var _stylesAdminStyles2 = _interopRequireDefault(_stylesAdminStyles);

var _Pydio$requireLib = _pydio2['default'].requireLib('boot');

var AsyncComponent = _Pydio$requireLib.AsyncComponent;
var TasksPanel = _Pydio$requireLib.TasksPanel;

var AdminDashboard = _react2['default'].createClass({
    displayName: 'AdminDashboard',

    mixins: [_utilMixins.MessagesProviderMixin, _utilMixins.PydioProviderMixin],

    propTypes: {
        pydio: _react2['default'].PropTypes.instanceOf(_pydio2['default']).isRequired
    },

    getInitialState: function getInitialState() {
        var dm = this.props.pydio.getContextHolder();
        var showAdvanced = undefined;
        if (localStorage.getItem("cells.dashboard.advanced") !== null) {
            showAdvanced = localStorage.getItem("cells.dashboard.advanced");
        }
        if (!showAdvanced && dm.getContextNode().getMetadata().get("advanced")) {
            showAdvanced = true;
        }
        return {
            contextNode: dm.getContextNode(),
            selectedNodes: dm.getSelectedNodes(),
            contextStatus: dm.getContextNode().isLoaded(),
            openLeftNav: false,
            leftDocked: true,
            showAdvanced: showAdvanced
        };
    },

    toggleAdvanced: function toggleAdvanced() {
        var showAdvanced = this.state.showAdvanced;

        this.setState({ showAdvanced: !showAdvanced });
        localStorage.setItem("cells.dashboard.advanced", !showAdvanced);
    },

    dmChangesToState: function dmChangesToState() {
        var dm = this.props.pydio.getContextHolder();
        this.setState({
            contextNode: dm.getContextNode(),
            selectedNodes: dm.getSelectedNodes(),
            contextStatus: dm.getContextNode().isLoaded()
        });
        var showAdvanced = this.state.showAdvanced;

        if (!showAdvanced && dm.getContextNode().getMetadata().get("advanced")) {
            this.setState({ showAdvanced: true });
        }
        dm.getContextNode().observe("loaded", this.dmChangesToState);
        if (dm.getUniqueNode()) {
            dm.getUniqueNode().observe("loaded", this.dmChangesToState);
        }
    },

    openEditor: function openEditor(node) {
        this.openRightPane({
            COMPONENT: PydioComponents.ReactEditorOpener,
            PROPS: {
                node: node,
                registry: this.props.pydio.Registry,
                onRequestTabClose: this.closeRightPane,
                registerCloseCallback: this.registerRightPaneCloseCallback
            },
            CHILDREN: null
        });
    },

    openRightPane: function openRightPane(serializedComponent) {
        var _this = this;

        serializedComponent['PROPS']['registerCloseCallback'] = this.registerRightPaneCloseCallback;
        serializedComponent['PROPS']['closeEditorContainer'] = this.closeRightPane;
        // Do not open on another already opened
        if (this.state && this.state.rightPanel && this.state.rightPanelCloseCallback) {
            if (this.state.rightPanelCloseCallback() === false) {
                return;
            }
        }
        if (typeof serializedComponent.COMPONENT === 'string' || serializedComponent.COMPONENT instanceof String) {
            (function () {
                var _serializedComponent$COMPONENT$split = serializedComponent.COMPONENT.split('.');

                var _serializedComponent$COMPONENT$split2 = _slicedToArray(_serializedComponent$COMPONENT$split, 2);

                var namespace = _serializedComponent$COMPONENT$split2[0];
                var componentName = _serializedComponent$COMPONENT$split2[1];

                _pydioHttpResourcesManager2['default'].loadClassesAndApply([namespace], (function () {
                    if (window[namespace] && window[namespace][componentName]) {
                        var comp = window[namespace][componentName];
                        serializedComponent.COMPONENT = comp;
                        this.openRightPane(serializedComponent);
                    }
                }).bind(_this));
            })();
        } else {
            this.setState({ rightPanel: serializedComponent });
        }
    },

    registerRightPaneCloseCallback: function registerRightPaneCloseCallback(callback) {
        this.setState({ rightPanelCloseCallback: callback });
    },

    closeRightPane: function closeRightPane() {
        if (this.state.rightPanelCloseCallback && this.state.rightPanelCloseCallback() === false) {
            return false;
        }
        this.setState({ rightPanel: null, rightPanelCloseCallback: null });
        return true;
    },

    componentDidMount: function componentDidMount() {
        var dm = this.props.pydio.getContextHolder();
        dm.observe("context_changed", this.dmChangesToState);
        dm.observe("selection_changed", this.dmChangesToState);
        // Monkey Patch Open Current Selection In Editor
        var monkeyObject = this.props.pydio.UI;
        if (this.props.pydio.UI.__proto__) {
            monkeyObject = this.props.pydio.UI.__proto__;
        }
        monkeyObject.__originalOpenCurrentSelectionInEditor = monkeyObject.openCurrentSelectionInEditor;
        monkeyObject.openCurrentSelectionInEditor = (function (dataModelOrNode) {
            if (dataModelOrNode instanceof _pydioModelDataModel2['default']) {
                this.openEditor(dataModelOrNode.getUniqueNode());
            } else {
                this.openEditor(dataModelOrNode);
            }
        }).bind(this);
        this._bmObserver = (function () {
            this.props.pydio.Controller.actions['delete']("bookmark");
        }).bind(this);
        this.props.pydio.observe("actions_loaded", this._bmObserver);
        this._resizeObserver = this.computeLeftIsDocked.bind(this);
        _pydioUtilDom2['default'].observeWindowResize(this._resizeObserver);
        this.computeLeftIsDocked();
    },

    componentWillUnmount: function componentWillUnmount() {
        var dm = this.props.pydio.getContextHolder();
        dm.stopObserving("context_changed", this.dmChangesToState);
        dm.stopObserving("selection_changed", this.dmChangesToState);
        // Restore Monkey Patch
        var monkeyObject = this.props.pydio.UI;
        if (this.props.pydio.UI.__proto__) {
            monkeyObject = this.props.pydio.UI.__proto__;
        }
        monkeyObject.openCurrentSelectionInEditor = monkeyObject.__originalOpenCurrentSelectionInEditor;
        if (this._bmObserver) {
            this.props.pydio.stopObserving("actions_loaded", this._bmObserver);
        }
        _pydioUtilDom2['default'].stopObservingWindowResize(this._resizeObserver);
    },

    computeLeftIsDocked: function computeLeftIsDocked() {
        var w = _pydioUtilDom2['default'].getViewportWidth();
        this.setState({ leftDocked: w > 780 });
    },

    routeMasterPanel: function routeMasterPanel(node, selectedNode) {
        var pydio = this.props.pydio;

        if (!selectedNode) {
            selectedNode = node;
        }
        var dynamicComponent = undefined;
        if (node.getMetadata().get('component')) {
            dynamicComponent = node.getMetadata().get('component');
        } else {
            return _react2['default'].createElement(
                'div',
                { style: { width: '100%', height: '100%', minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                _react2['default'].createElement(
                    'div',
                    { style: { fontSize: 18, color: 'rgba(0,0,0,0.33)' } },
                    pydio.MessageHash["466"]
                )
            );
        }
        var parts = dynamicComponent.split('.');
        var additionalProps = node.getMetadata().has('props') ? JSON.parse(node.getMetadata().get('props')) : {};
        return _react2['default'].createElement(AsyncComponent, _extends({
            pydio: pydio,
            namespace: parts[0],
            componentName: parts[1],
            dataModel: pydio.getContextHolder(),
            rootNode: node,
            currentNode: selectedNode,
            openEditor: this.openEditor,
            openRightPane: this.openRightPane,
            closeRightPane: this.closeRightPane
        }, additionalProps, {
            accessByName: function (permissionName) {
                return !additionalProps.accesses || additionalProps.accesses[permissionName] === true;
            }
        }));
    },

    render: function render() {
        var _state = this.state;
        var showAdvanced = _state.showAdvanced;
        var rightPanel = _state.rightPanel;
        var leftDocked = _state.leftDocked;
        var openLeftNav = _state.openLeftNav;
        var pydio = this.props.pydio;

        var dm = pydio.getContextHolder();

        var rPanelContent = undefined;
        if (rightPanel) {
            rPanelContent = _react2['default'].createElement(rightPanel.COMPONENT, rightPanel.PROPS, rightPanel.CHILDREN);
        }

        /*
        // LEFT BUTTON FOR TOGGLING LEFT BAR : TODO ?
        let leftIcon, leftIconClick;
        if (leftDocked) {
            leftIcon = "mdi mdi-tune-vertical";
            leftIconClick = () => {
                dm.requireContextChange(dm.getRootNode());
            }
        } else {
            leftIcon = "mdi mdi-menu";
            leftIconClick = () => {
                this.setState({openLeftNav: !openLeftNav})
            };
        }
        const leftIconButton = (
            <div style={{margin: '0 12px'}}>
                <IconButton iconClassName={leftIcon} onTouchTap={leftIconClick} iconStyle={styles.appBarLeftIcon}/>
            </div>
        );
        */

        var theme = (0, _materialUiStyles.getMuiTheme)({
            palette: {
                primary1Color: '#03a9f4',
                primary2Color: '#f57c00',
                accent1Color: '#f57c00',
                accent2Color: '#324a57',
                avatarsColor: '#438db3',
                sharingColor: '#4aceb0'
            }
        });
        var adminStyles = (0, _stylesAdminStyles2['default'])(theme.palette);

        return _react2['default'].createElement(
            _materialUi.MuiThemeProvider,
            { muiTheme: theme },
            _react2['default'].createElement(
                'div',
                { className: 'app-canvas' },
                _react2['default'].createElement(_AdminLeftNav2['default'], {
                    pydio: this.props.pydio,
                    dataModel: dm,
                    rootNode: dm.getRootNode(),
                    contextNode: dm.getContextNode(),
                    open: leftDocked || openLeftNav,
                    showAdvanced: showAdvanced,
                    toggleAdvanced: this.toggleAdvanced.bind(this)
                }),
                _react2['default'].createElement(TasksPanel, { pydio: pydio, mode: "absolute" }),
                _react2['default'].createElement(
                    _materialUi.Paper,
                    { zDepth: 0, className: 'main-panel', style: _extends({}, adminStyles.body.mainPanel, { left: leftDocked ? 256 : 0 }) },
                    this.routeMasterPanel(dm.getContextNode(), dm.getUniqueNode())
                ),
                _react2['default'].createElement(
                    _materialUi.Paper,
                    { zDepth: 2, className: "paper-editor layout-fill vertical-layout" + (rightPanel ? ' visible' : '') },
                    rPanelContent
                )
            )
        );
    }
});

exports['default'] = AdminDashboard = (0, _materialUiStyles.muiThemeable)()(AdminDashboard);
exports['default'] = AdminDashboard;
module.exports = exports['default'];
