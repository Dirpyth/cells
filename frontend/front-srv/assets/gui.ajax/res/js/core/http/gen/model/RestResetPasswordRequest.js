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


import ApiClient from '../ApiClient';





/**
* The RestResetPasswordRequest model module.
* @module model/RestResetPasswordRequest
* @version 1.0
*/
export default class RestResetPasswordRequest {
    /**
    * Constructs a new <code>RestResetPasswordRequest</code>.
    * @alias module:model/RestResetPasswordRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestResetPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestResetPasswordRequest} obj Optional instance to populate.
    * @return {module:model/RestResetPasswordRequest} The populated <code>RestResetPasswordRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestResetPasswordRequest();

            
            
            

            if (data.hasOwnProperty('ResetPasswordToken')) {
                obj['ResetPasswordToken'] = ApiClient.convertToType(data['ResetPasswordToken'], 'String');
            }
            if (data.hasOwnProperty('UserLogin')) {
                obj['UserLogin'] = ApiClient.convertToType(data['UserLogin'], 'String');
            }
            if (data.hasOwnProperty('NewPassword')) {
                obj['NewPassword'] = ApiClient.convertToType(data['NewPassword'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} ResetPasswordToken
    */
    ResetPasswordToken = undefined;
    /**
    * @member {String} UserLogin
    */
    UserLogin = undefined;
    /**
    * @member {String} NewPassword
    */
    NewPassword = undefined;








}


