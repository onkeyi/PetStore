/**
 * PetStore API
 * ## Swagger PetStore  実装 - バックエンド： Laravel - フロントエンド： Vue
 *
 * The version of the OpenAPI document: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Category from '../model/Category';
import Error400 from '../model/Error400';
import Error500 from '../model/Error500';
import ResponsePegination from '../model/ResponsePegination';
import Tag from '../model/Tag';

/**
* Tag service.
* @module api/TagApi
* @version 0.1.1
*/
export default class TagApi {

    /**
    * Constructs a new TagApi. 
    * @alias module:api/TagApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Tag 登録
     * @param {Object} opts Optional parameters
     * @param {module:model/Tag} opts.tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Category} and HTTP response
     */
    addNewTagWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['tag'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = ['applicaiton/json'];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = Category;
      return this.apiClient.callApi(
        '/tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Tag 登録
     * @param {Object} opts Optional parameters
     * @param {module:model/Tag} opts.tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    addNewTag(opts) {
      return this.addNewTagWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Tag情報削除
     * @param {Number} tagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Category} and HTTP response
     */
    deleteTagByIdWithHttpInfo(tagId) {
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteTagById");
      }

      let pathParams = {
        'tagId': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearer'];
      let contentTypes = [];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = Category;
      return this.apiClient.callApi(
        '/tag/{tagId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Tag情報削除
     * @param {Number} tagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    deleteTagById(tagId) {
      return this.deleteTagByIdWithHttpInfo(tagId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Tag一覧
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponsePegination} and HTTP response
     */
    getAllTagsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = ResponsePegination;
      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Tag一覧
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponsePegination}
     */
    getAllTags() {
      return this.getAllTagsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Tag情報
     * @param {Number} tagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Category} and HTTP response
     */
    getTagByIdWithHttpInfo(tagId) {
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling getTagById");
      }

      let pathParams = {
        'tagId': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = Category;
      return this.apiClient.callApi(
        '/tag/{tagId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Tag情報
     * @param {Number} tagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    getTagById(tagId) {
      return this.getTagByIdWithHttpInfo(tagId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Tag情報更新
     * @param {Number} tagId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Tag} opts.tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Category} and HTTP response
     */
    updateTagByIdWithHttpInfo(tagId, opts) {
      opts = opts || {};
      let postBody = opts['tag'];
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling updateTagById");
      }

      let pathParams = {
        'tagId': tagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearer'];
      let contentTypes = ['applicaiton/json'];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = Category;
      return this.apiClient.callApi(
        '/tag/{tagId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Tag情報更新
     * @param {Number} tagId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Tag} opts.tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    updateTagById(tagId, opts) {
      return this.updateTagByIdWithHttpInfo(tagId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}