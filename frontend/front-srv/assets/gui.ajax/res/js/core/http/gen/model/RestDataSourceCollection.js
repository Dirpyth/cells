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
import ObjectDataSource from './ObjectDataSource';





/**
* The RestDataSourceCollection model module.
* @module model/RestDataSourceCollection
* @version 1.0
*/
export default class RestDataSourceCollection {
    /**
    * Constructs a new <code>RestDataSourceCollection</code>.
    * @alias module:model/RestDataSourceCollection
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestDataSourceCollection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestDataSourceCollection} obj Optional instance to populate.
    * @return {module:model/RestDataSourceCollection} The populated <code>RestDataSourceCollection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestDataSourceCollection();

            
            
            

            if (data.hasOwnProperty('DataSources')) {
                obj['DataSources'] = ApiClient.convertToType(data['DataSources'], [ObjectDataSource]);
            }
            if (data.hasOwnProperty('Total')) {
                obj['Total'] = ApiClient.convertToType(data['Total'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ObjectDataSource>} DataSources
    */
    DataSources = undefined;
    /**
    * @member {Number} Total
    */
    Total = undefined;








}


