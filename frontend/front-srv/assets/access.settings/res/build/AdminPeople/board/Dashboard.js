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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _editorEditor = require('../editor/Editor');

var _editorEditor2 = _interopRequireDefault(_editorEditor);

var _pydioModelDataModel = require('pydio/model/data-model');

var _pydioModelDataModel2 = _interopRequireDefault(_pydioModelDataModel);

var _materialUiStyles = require('material-ui/styles');

var _pydioHttpResourcesManager = require('pydio/http/resources-manager');

var _pydioHttpResourcesManager2 = _interopRequireDefault(_pydioHttpResourcesManager);

var Dashboard = _react2['default'].createClass({
    displayName: 'Dashboard',

    mixins: [AdminComponents.MessagesConsumerMixin],

    propTypes: {
        dataModel: _react2['default'].PropTypes.instanceOf(_pydioModelDataModel2['default']).isRequired,
        rootNode: _react2['default'].PropTypes.instanceOf(AjxpNode).isRequired,
        currentNode: _react2['default'].PropTypes.instanceOf(AjxpNode).isRequired,
        openEditor: _react2['default'].PropTypes.func.isRequired
    },

    getInitialState: function getInitialState() {
        return {
            searchResultData: false,
            currentNode: this.props.currentNode,
            dataModel: this.props.dataModel,
            filterValue: 1
        };
    },

    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        if (!this.state.searchResultData) {
            this.setState({
                currentNode: newProps.currentNode,
                dataModel: newProps.dataModel
            });
        }
    },

    renderListUserAvatar: function renderListUserAvatar(node) {
        if (node.getMetadata().get("avatar")) {
            var avatar = node.getMetadata().get("avatar");
            var imgSrc = pydio.Parameters.get("ajxpServerAccess") + "&get_action=get_binary_param&user_id=" + PathUtils.getBasename(node.getPath()) + "&binary_id=" + avatar;
            return _react2['default'].createElement('div', { style: {
                    width: 33,
                    height: 33,
                    backgroundImage: "url(" + imgSrc + ")",
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                    backgroundPosition: 'center',
                    margin: 16
                } });
        }
        var style = {
            backgroundColor: '#BDBDBD',
            color: 'white',
            borderRadius: '50%',
            margin: 16,
            width: 33,
            height: 33,
            fontSize: 16,
            padding: 8,
            textAlign: 'center'
        };
        var iconClass = node.getMetadata().get("icon_class") ? node.getMetadata().get("icon_class") : node.isLeaf() ? "icon-file-alt" : "icon-folder-close";
        return _react2['default'].createElement(_materialUi.FontIcon, { className: iconClass, style: style });
    },

    renderListEntryFirstLine: function renderListEntryFirstLine(node) {
        if (node.getMetadata().get("shared_user")) {
            return node.getLabel() + " [" + this.context.getMessage('user.13') + "]";
        } else if (node.getMetadata().get("profile") === "admin") {
            return _react2['default'].createElement(
                'span',
                null,
                node.getLabel(),
                ' ',
                _react2['default'].createElement('span', { className: 'icon-lock', style: { display: 'inline-block', marginRight: 5 } })
            );
        } else {
            return node.getLabel();
        }
    },

    renderListEntrySecondLine: function renderListEntrySecondLine(node) {
        if (node.isLeaf()) {
            if (node.getPath() === '/idm/users') {
                // This is the Root Group
                return this.context.getMessage('user.8');
            }
            var strings = [];
            strings.push(node.getMetadata().get('object_id'));
            var profile = node.getMetadata().get("profile");
            if (profile && profile !== "standard") {
                strings.push("Profile " + profile);
            }
            if (node.getMetadata().get("last_connection_readable")) {
                strings.push(this.context.getMessage('user.9') + ' ' + node.getMetadata().get("last_connection_readable"));
            }
            var roles = node.getMetadata().get('ajxp_roles');
            if (roles && roles.split(',').length) {
                strings.push(this.context.getMessage('user.11').replace("%i", roles.split(',').length));
            }
            return strings.join(" - ");
        } else {
            return this.context.getMessage('user.12') + ': ' + node.getPath().replace('/idm/users', '');
        }
    },

    renderListEntrySelector: function renderListEntrySelector(node) {
        if (node.getPath() == '/idm/users') {
            return false;
        }
        return node.isLeaf();
    },

    displaySearchResults: function displaySearchResults(searchTerm, searchDataModel) {
        this.setState({
            searchResultTerm: searchTerm,
            searchResultData: {
                term: searchTerm,
                toggleState: this.hideSearchResults
            },
            currentNode: searchDataModel.getContextNode(),
            dataModel: searchDataModel
        });
    },

    hideSearchResults: function hideSearchResults() {
        this.setState({
            searchResultData: false,
            currentNode: this.props.currentNode,
            dataModel: this.props.dataModel
        });
    },

    createUserAction: function createUserAction() {
        pydio.UI.openComponentInModal('AdminPeople', 'CreateUserForm', { dataModel: this.props.dataModel, openRoleEditor: this.openRoleEditor.bind(this) });
    },

    createGroupAction: function createGroupAction() {
        pydio.UI.openComponentInModal('AdminPeople', 'CreateRoleOrGroupForm', { type: 'group', openRoleEditor: this.openRoleEditor.bind(this) });
    },

    openUsersImporter: function openUsersImporter() {
        pydio.UI.openComponentInModal('EnterprisePeople', 'UsersImportDialog', { dataModel: this.props.dataModel });
    },

    openRoleEditor: function openRoleEditor(node) {
        var initialSection = arguments.length <= 1 || arguments[1] === undefined ? 'activity' : arguments[1];
        var _props = this.props;
        var advancedAcl = _props.advancedAcl;
        var pydio = _props.pydio;

        if (this.refs.editor && this.refs.editor.isDirty()) {
            if (!window.confirm(pydio.MessageHash["role_editor.19"])) {
                return false;
            }
        }
        var editorData = {
            COMPONENT: _editorEditor2['default'],
            PROPS: {
                ref: "editor",
                node: node,
                pydio: pydio,
                initialEditSection: initialSection,
                onRequestTabClose: this.closeRoleEditor,
                advancedAcl: advancedAcl
            }
        };
        this.props.openRightPane(editorData);
    },

    closeRoleEditor: function closeRoleEditor() {
        if (this.refs.editor && this.refs.editor.isDirty()) {
            if (!window.confirm(this.props.pydio.MessageHash["role_editor.19"])) {
                return false;
            }
        }
        this.props.closeRightPane();
    },

    deleteAction: function deleteAction(node) {
        var dm = new _pydioModelDataModel2['default']();
        dm.setSelectedNodes([node]);
        _pydioHttpResourcesManager2['default'].loadClassesAndApply(['AdminActions'], function () {
            AdminActions.Callbacks.deleteAction(null, [dm]);
        });
    },

    renderNodeActions: function renderNodeActions(node) {
        var _this = this;

        var mime = node.getAjxpMime();
        var iconStyle = {
            color: 'rgba(0,0,0,0.43)',
            fontSize: 20
        };
        var disabledStyle = {
            color: 'rgba(0,0,0,0.15)',
            fontSize: 20
        };
        var actions = [];
        if (mime === 'user_editable' || mime === 'group') {
            actions.push(_react2['default'].createElement(_materialUi.IconButton, { key: 'edit', iconClassName: 'mdi mdi-pencil', onTouchTap: function () {
                    _this.openRoleEditor(node);
                }, onClick: function (e) {
                    e.stopPropagation();
                }, iconStyle: iconStyle }));
            actions.push(_react2['default'].createElement(_materialUi.IconButton, { key: 'delete', iconClassName: 'mdi mdi-delete', onTouchTap: function () {
                    _this.deleteAction(node);
                }, onClick: function (e) {
                    e.stopPropagation();
                }, iconStyle: iconStyle }));
        } else if (mime === 'user') {
            actions.push(_react2['default'].createElement(_materialUi.IconButton, { key: 'edit', iconClassName: 'mdi mdi-pencil', onTouchTap: function () {
                    _this.openRoleEditor(node);
                }, onClick: function (e) {
                    e.stopPropagation();
                }, iconStyle: iconStyle }));
            actions.push(_react2['default'].createElement(_materialUi.IconButton, { key: 'delete', iconClassName: 'mdi mdi-delete', disabled: true, iconStyle: disabledStyle, onClick: function (e) {
                    e.stopPropagation();
                } }));
        }
        return _react2['default'].createElement(
            'div',
            null,
            actions
        );
    },

    filterNodes: function filterNodes(node) {
        var profile = node.getMetadata().get("profile");
        var isAdmin = node.getMetadata().get("isAdmin") === "true";
        var filterValue = this.state.filterValue;

        switch (filterValue) {
            case 1:
                return profile !== "shared";
            case 2:
                return profile === "shared";
            case 3:
                return isAdmin;
            default:
                return true;
        }
    },

    render: function render() {
        var _this2 = this;

        var fontIconStyle = {
            style: {
                backgroundColor: this.props.muiTheme.palette.accent2Color,
                borderRadius: '50%',
                width: 36,
                height: 36,
                padding: 8,
                marginRight: 10
            },
            iconStyle: {
                color: 'white',
                fontSize: 20
            }
        };

        var importButton = _react2['default'].createElement(_materialUi.IconButton, _extends({}, fontIconStyle, { iconClassName: 'mdi mdi-file-excel', primary: false, tooltipPosition: "bottom-left", tooltip: this.context.getMessage('171', 'settings'), onTouchTap: this.openUsersImporter }));
        if (!_pydioHttpResourcesManager2['default'].moduleIsAvailable('EnterprisePeople')) {
            var disabled = { style: _extends({}, fontIconStyle.style), iconStyle: _extends({}, fontIconStyle.iconStyle) };
            disabled.style.backgroundColor = 'rgba(0,0,0,0.23)';
            importButton = _react2['default'].createElement(_materialUi.IconButton, _extends({}, disabled, { iconClassName: 'mdi mdi-file-excel', primary: false, tooltipPosition: "bottom-left", tooltip: this.context.getMessage('171', 'settings'), disabled: true }));
        }

        var searchBox = _react2['default'].createElement(PydioComponents.SearchBox, {
            displayResults: this.displaySearchResults,
            displayResultsState: this.state.searchResultData,
            hideResults: this.hideSearchResults,
            style: { margin: '-18px 20px 0' },
            parameters: { get_action: 'admin_search_users', dir: this.props.dataModel.getContextNode().getPath() },
            queryParameterName: 'query',
            limit: 50,
            textLabel: this.context.getMessage('user.7')
        });

        var headerButtons = [_react2['default'].createElement(_materialUi.FlatButton, { primary: true, label: this.context.getMessage("user.1"), onTouchTap: this.createUserAction }), _react2['default'].createElement(_materialUi.FlatButton, { primary: true, label: this.context.getMessage("user.2"), onTouchTap: this.createGroupAction })];

        var groupHeaderStyle = {
            height: 56,
            borderBottom: '1px solid rgb(228, 228, 228)',
            padding: '20px 10px',
            fontSize: 16
        };
        var groupPanelStyle = {
            flex: 'none'
        };
        if (this.state.searchResultData !== false) {
            groupPanelStyle = {
                flex: 'none',
                width: 0
            };
        }

        var filterIcon = _react2['default'].createElement(
            _materialUi.IconMenu,
            {
                iconButtonElement: _react2['default'].createElement(_materialUi.IconButton, { style: { marginRight: -16, marginLeft: 8 }, iconStyle: { color: 'rgba(0, 0, 0, 0.4)' }, iconClassName: "mdi mdi-filter-variant" }),
                anchorOrigin: { horizontal: 'right', vertical: 'top' },
                targetOrigin: { horizontal: 'right', vertical: 'top' },
                value: this.state.filterValue,
                onChange: function (e, val) {
                    _this2.setState({ filterValue: val });
                }
            },
            _react2['default'].createElement(_materialUi.MenuItem, { value: 1, primaryText: 'Internal Users' }),
            _react2['default'].createElement(_materialUi.MenuItem, { value: 2, primaryText: 'Shared Users' }),
            _react2['default'].createElement(_materialUi.MenuItem, { value: 3, primaryText: 'Admins Only' }),
            _react2['default'].createElement(_materialUi.MenuItem, { value: 4, primaryText: 'All Users' })
        );

        return _react2['default'].createElement(
            'div',
            { className: "main-layout-nav-to-stack vertical-layout people-dashboard" },
            _react2['default'].createElement(AdminComponents.Header, {
                title: this.context.getMessage('2', 'settings'),
                icon: 'mdi mdi-account-multiple',
                actions: headerButtons,
                centerContent: searchBox
            }),
            _react2['default'].createElement(
                _materialUi.Paper,
                { zDepth: 1, style: { margin: 16 }, className: "horizontal-layout layout-fill" },
                _react2['default'].createElement(
                    'div',
                    { className: 'hide-on-vertical-layout vertical-layout tab-vertical-layout people-tree', style: groupPanelStyle },
                    _react2['default'].createElement(
                        'div',
                        { style: { flex: 1 } },
                        _react2['default'].createElement(
                            'div',
                            { style: groupHeaderStyle },
                            'Groups'
                        ),
                        _react2['default'].createElement(PydioComponents.DNDTreeView, {
                            showRoot: true,
                            rootLabel: this.context.getMessage("user.5"),
                            node: this.props.rootNode,
                            dataModel: this.props.dataModel,
                            className: 'users-groups-tree',
                            paddingOffset: 10
                        })
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { zDepth: 0, className: 'layout-fill vertical-layout people-list' },
                    _react2['default'].createElement(PydioComponents.SimpleList, {
                        ref: 'mainlist',
                        pydio: this.props.pydio,
                        node: this.state.currentNode,
                        dataModel: this.state.dataModel,
                        openEditor: this.openRoleEditor,
                        clearSelectionOnReload: false,
                        entryRenderIcon: this.renderListUserAvatar,
                        entryRenderFirstLine: this.renderListEntryFirstLine,
                        entryRenderSecondLine: this.renderListEntrySecondLine,
                        entryEnableSelector: this.renderListEntrySelector,
                        entryRenderActions: this.renderNodeActions,
                        searchResultData: this.state.searchResultData,
                        elementHeight: PydioComponents.SimpleList.HEIGHT_TWO_LINES,
                        hideToolbar: false,
                        toolbarStyle: { backgroundColor: 'white', borderBottom: '1px solid #e4e4e4' },
                        multipleActions: [this.props.pydio.Controller.getActionByName('delete')],
                        additionalActions: filterIcon,
                        filterNodes: this.filterNodes
                    })
                )
            )
        );
    }

});

exports['default'] = Dashboard = (0, _materialUiStyles.muiThemeable)()(Dashboard);
exports['default'] = Dashboard;
module.exports = exports['default'];
