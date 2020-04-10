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

var _RestSettingsAccessRestPolicy = require('./RestSettingsAccessRestPolicy');

var _RestSettingsAccessRestPolicy2 = _interopRequireDefault(_RestSettingsAccessRestPolicy);

/**
* The RestSettingsAccess model module.
* @module model/RestSettingsAccess
* @version 1.0
*/

var RestSettingsAccess = (function () {
    /**
    * Constructs a new <code>RestSettingsAccess</code>.
    * @alias module:model/RestSettingsAccess
    * @class
    */

    function RestSettingsAccess() {
        _classCallCheck(this, RestSettingsAccess);

        this.Label = undefined;
        this.Description = undefined;
        this.Policies = undefined;
    }

    /**
    * Constructs a <code>RestSettingsAccess</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestSettingsAccess} obj Optional instance to populate.
    * @return {module:model/RestSettingsAccess} The populated <code>RestSettingsAccess</code> instance.
    */

    RestSettingsAccess.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSettingsAccess();

            if (data.hasOwnProperty('Label')) {
                obj['Label'] = _ApiClient2['default'].convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = _ApiClient2['default'].convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = _ApiClient2['default'].convertToType(data['Policies'], [_RestSettingsAccessRestPolicy2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {String} Label
    */
    return RestSettingsAccess;
})();

exports['default'] = RestSettingsAccess;
module.exports = exports['default'];

/**
* @member {String} Description
*/

/**
* @member {Array.<module:model/RestSettingsAccessRestPolicy>} Policies
*/
