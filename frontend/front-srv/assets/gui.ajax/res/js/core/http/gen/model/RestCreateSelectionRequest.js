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
import TreeNode from './TreeNode';





/**
* The RestCreateSelectionRequest model module.
* @module model/RestCreateSelectionRequest
* @version 1.0
*/
export default class RestCreateSelectionRequest {
    /**
    * Constructs a new <code>RestCreateSelectionRequest</code>.
    * @alias module:model/RestCreateSelectionRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestCreateSelectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestCreateSelectionRequest} obj Optional instance to populate.
    * @return {module:model/RestCreateSelectionRequest} The populated <code>RestCreateSelectionRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestCreateSelectionRequest();

            
            
            

            if (data.hasOwnProperty('Nodes')) {
                obj['Nodes'] = ApiClient.convertToType(data['Nodes'], [TreeNode]);
            }
            if (data.hasOwnProperty('TargetAction')) {
                obj['TargetAction'] = ApiClient.convertToType(data['TargetAction'], 'String');
            }
            if (data.hasOwnProperty('Persist')) {
                obj['Persist'] = ApiClient.convertToType(data['Persist'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/TreeNode>} Nodes
    */
    Nodes = undefined;
    /**
    * @member {String} TargetAction
    */
    TargetAction = undefined;
    /**
    * @member {Boolean} Persist
    */
    Persist = undefined;








}


