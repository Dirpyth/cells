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
import ActivityStreamContext from './ActivityStreamContext';
import ActivitySummaryPointOfView from './ActivitySummaryPointOfView';





/**
* The ActivityStreamActivitiesRequest model module.
* @module model/ActivityStreamActivitiesRequest
* @version 1.0
*/
export default class ActivityStreamActivitiesRequest {
    /**
    * Constructs a new <code>ActivityStreamActivitiesRequest</code>.
    * @alias module:model/ActivityStreamActivitiesRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ActivityStreamActivitiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActivityStreamActivitiesRequest} obj Optional instance to populate.
    * @return {module:model/ActivityStreamActivitiesRequest} The populated <code>ActivityStreamActivitiesRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityStreamActivitiesRequest();

            
            
            

            if (data.hasOwnProperty('Context')) {
                obj['Context'] = ActivityStreamContext.constructFromObject(data['Context']);
            }
            if (data.hasOwnProperty('ContextData')) {
                obj['ContextData'] = ApiClient.convertToType(data['ContextData'], 'String');
            }
            if (data.hasOwnProperty('StreamFilter')) {
                obj['StreamFilter'] = ApiClient.convertToType(data['StreamFilter'], 'String');
            }
            if (data.hasOwnProperty('BoxName')) {
                obj['BoxName'] = ApiClient.convertToType(data['BoxName'], 'String');
            }
            if (data.hasOwnProperty('UnreadCountOnly')) {
                obj['UnreadCountOnly'] = ApiClient.convertToType(data['UnreadCountOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = ApiClient.convertToType(data['Offset'], 'String');
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = ApiClient.convertToType(data['Limit'], 'String');
            }
            if (data.hasOwnProperty('AsDigest')) {
                obj['AsDigest'] = ApiClient.convertToType(data['AsDigest'], 'Boolean');
            }
            if (data.hasOwnProperty('PointOfView')) {
                obj['PointOfView'] = ActivitySummaryPointOfView.constructFromObject(data['PointOfView']);
            }
            if (data.hasOwnProperty('Language')) {
                obj['Language'] = ApiClient.convertToType(data['Language'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ActivityStreamContext} Context
    */
    Context = undefined;
    /**
    * @member {String} ContextData
    */
    ContextData = undefined;
    /**
    * @member {String} StreamFilter
    */
    StreamFilter = undefined;
    /**
    * @member {String} BoxName
    */
    BoxName = undefined;
    /**
    * @member {Boolean} UnreadCountOnly
    */
    UnreadCountOnly = undefined;
    /**
    * @member {String} Offset
    */
    Offset = undefined;
    /**
    * @member {String} Limit
    */
    Limit = undefined;
    /**
    * @member {Boolean} AsDigest
    */
    AsDigest = undefined;
    /**
    * @member {module:model/ActivitySummaryPointOfView} PointOfView
    */
    PointOfView = undefined;
    /**
    * @member {String} Language
    */
    Language = undefined;








}


