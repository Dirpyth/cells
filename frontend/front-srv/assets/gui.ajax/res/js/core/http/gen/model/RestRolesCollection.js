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
import IdmRole from './IdmRole';





/**
* The RestRolesCollection model module.
* @module model/RestRolesCollection
* @version 1.0
*/
export default class RestRolesCollection {
    /**
    * Constructs a new <code>RestRolesCollection</code>.
    * @alias module:model/RestRolesCollection
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestRolesCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestRolesCollection} obj Optional instance to populate.
    * @return {module:model/RestRolesCollection} The populated <code>RestRolesCollection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestRolesCollection();

            
            
            

            if (data.hasOwnProperty('Roles')) {
                obj['Roles'] = ApiClient.convertToType(data['Roles'], [IdmRole]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/IdmRole>} Roles
    */
    Roles = undefined;








}


