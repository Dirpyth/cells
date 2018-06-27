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


import ApiClient from "../ApiClient";
import IdmSearchUserMetaRequest from '../model/IdmSearchUserMetaRequest';
import IdmUpdateUserMetaNamespaceRequest from '../model/IdmUpdateUserMetaNamespaceRequest';
import IdmUpdateUserMetaNamespaceResponse from '../model/IdmUpdateUserMetaNamespaceResponse';
import IdmUpdateUserMetaRequest from '../model/IdmUpdateUserMetaRequest';
import IdmUpdateUserMetaResponse from '../model/IdmUpdateUserMetaResponse';
import RestBulkMetaResponse from '../model/RestBulkMetaResponse';
import RestUserBookmarksRequest from '../model/RestUserBookmarksRequest';
import RestUserMetaCollection from '../model/RestUserMetaCollection';
import RestUserMetaNamespaceCollection from '../model/RestUserMetaNamespaceCollection';

/**
* UserMetaService service.
* @module api/UserMetaServiceApi
* @version 1.0
*/
export default class UserMetaServiceApi {

    /**
    * Constructs a new UserMetaServiceApi. 
    * @alias module:api/UserMetaServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List defined meta namespaces
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserMetaNamespaceCollection} and HTTP response
     */
    listUserMetaNamespaceWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestUserMetaNamespaceCollection;

      return this.apiClient.callApi(
        '/user-meta/namespace', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List defined meta namespaces
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserMetaNamespaceCollection}
     */
    listUserMetaNamespace() {
      return this.listUserMetaNamespaceWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search a list of meta by node Id or by User id and by namespace
     * @param {module:model/IdmSearchUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserMetaCollection} and HTTP response
     */
    searchUserMetaWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchUserMeta");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestUserMetaCollection;

      return this.apiClient.callApi(
        '/user-meta/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search a list of meta by node Id or by User id and by namespace
     * @param {module:model/IdmSearchUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserMetaCollection}
     */
    searchUserMeta(body) {
      return this.searchUserMetaWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update/delete user meta
     * @param {module:model/IdmUpdateUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUpdateUserMetaResponse} and HTTP response
     */
    updateUserMetaWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUserMeta");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IdmUpdateUserMetaResponse;

      return this.apiClient.callApi(
        '/user-meta/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update/delete user meta
     * @param {module:model/IdmUpdateUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUpdateUserMetaResponse}
     */
    updateUserMeta(body) {
      return this.updateUserMetaWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Admin: update namespaces
     * @param {module:model/IdmUpdateUserMetaNamespaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUpdateUserMetaNamespaceResponse} and HTTP response
     */
    updateUserMetaNamespaceWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUserMetaNamespace");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IdmUpdateUserMetaNamespaceResponse;

      return this.apiClient.callApi(
        '/user-meta/namespace', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Admin: update namespaces
     * @param {module:model/IdmUpdateUserMetaNamespaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUpdateUserMetaNamespaceResponse}
     */
    updateUserMetaNamespace(body) {
      return this.updateUserMetaNamespaceWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Special API for Bookmarks, will load userMeta and the associated nodes, and return as a node list
     * @param {module:model/RestUserBookmarksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestBulkMetaResponse} and HTTP response
     */
    userBookmarksWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userBookmarks");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestBulkMetaResponse;

      return this.apiClient.callApi(
        '/user-meta/bookmarks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Special API for Bookmarks, will load userMeta and the associated nodes, and return as a node list
     * @param {module:model/RestUserBookmarksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestBulkMetaResponse}
     */
    userBookmarks(body) {
      return this.userBookmarksWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
