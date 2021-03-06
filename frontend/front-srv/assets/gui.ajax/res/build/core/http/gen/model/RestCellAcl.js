/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _IdmACLAction = require('./IdmACLAction');

var _IdmACLAction2 = _interopRequireDefault(_IdmACLAction);

var _IdmRole = require('./IdmRole');

var _IdmRole2 = _interopRequireDefault(_IdmRole);

var _IdmUser = require('./IdmUser');

var _IdmUser2 = _interopRequireDefault(_IdmUser);

/**
* The RestCellAcl model module.
* @module model/RestCellAcl
* @version 1.0
*/

var RestCellAcl = (function () {
    /**
    * Constructs a new <code>RestCellAcl</code>.
    * @alias module:model/RestCellAcl
    * @class
    */

    function RestCellAcl() {
        _classCallCheck(this, RestCellAcl);

        this.RoleId = undefined;
        this.Actions = undefined;
        this.IsUserRole = undefined;
        this.User = undefined;
        this.Group = undefined;
        this.Role = undefined;
    }

    /**
    * Constructs a <code>RestCellAcl</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestCellAcl} obj Optional instance to populate.
    * @return {module:model/RestCellAcl} The populated <code>RestCellAcl</code> instance.
    */

    RestCellAcl.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestCellAcl();

            if (data.hasOwnProperty('RoleId')) {
                obj['RoleId'] = _ApiClient2['default'].convertToType(data['RoleId'], 'String');
            }
            if (data.hasOwnProperty('Actions')) {
                obj['Actions'] = _ApiClient2['default'].convertToType(data['Actions'], [_IdmACLAction2['default']]);
            }
            if (data.hasOwnProperty('IsUserRole')) {
                obj['IsUserRole'] = _ApiClient2['default'].convertToType(data['IsUserRole'], 'Boolean');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = _IdmUser2['default'].constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('Group')) {
                obj['Group'] = _IdmUser2['default'].constructFromObject(data['Group']);
            }
            if (data.hasOwnProperty('Role')) {
                obj['Role'] = _IdmRole2['default'].constructFromObject(data['Role']);
            }
        }
        return obj;
    };

    /**
    * @member {String} RoleId
    */
    return RestCellAcl;
})();

exports['default'] = RestCellAcl;
module.exports = exports['default'];

/**
* @member {Array.<module:model/IdmACLAction>} Actions
*/

/**
* @member {Boolean} IsUserRole
*/

/**
* @member {module:model/IdmUser} User
*/

/**
* @member {module:model/IdmUser} Group
*/

/**
* @member {module:model/IdmRole} Role
*/
