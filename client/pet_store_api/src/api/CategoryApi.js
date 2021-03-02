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

/**
* Category service.
* @module api/CategoryApi
* @version 0.1.1
*/
export default class CategoryApi {

    /**
    * Constructs a new CategoryApi. 
    * @alias module:api/CategoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * カテゴリ新規登録
     * カテゴリ登録 
     * @param {Object} opts Optional parameters
     * @param {module:model/Category} opts.category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    addNewCategoryWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['category'];

      let pathParams = {
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/category', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * カテゴリ新規登録
     * カテゴリ登録 
     * @param {Object} opts Optional parameters
     * @param {module:model/Category} opts.category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    addNewCategory(opts) {
      return this.addNewCategoryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * カテゴリ削除
     * カテゴリ削除 
     * @param {Number} categoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCategoryByIdWithHttpInfo(categoryId) {
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCategoryById");
      }

      let pathParams = {
        'categoryId': categoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/category/{categoryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * カテゴリ削除
     * カテゴリ削除 
     * @param {Number} categoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCategoryById(categoryId) {
      return this.deleteCategoryByIdWithHttpInfo(categoryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * カテゴリ一覧
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Category>} and HTTP response
     */
    getAllCategorysWithHttpInfo() {
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
      let returnType = [Category];
      return this.apiClient.callApi(
        '/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * カテゴリ一覧
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Category>}
     */
    getAllCategorys() {
      return this.getAllCategorysWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * カテゴリ取得
     * カテゴリ取得 
     * @param {Number} categoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Category} and HTTP response
     */
    getCategoryByIdWithHttpInfo(categoryId) {
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCategoryById");
      }

      let pathParams = {
        'categoryId': categoryId
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
        '/category/{categoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * カテゴリ取得
     * カテゴリ取得 
     * @param {Number} categoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    getCategoryById(categoryId) {
      return this.getCategoryByIdWithHttpInfo(categoryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * カテゴリ更新
     * カテゴリ更新 
     * @param {String} categoryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Category} opts.category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateCategoryByIdWithHttpInfo(categoryId, opts) {
      opts = opts || {};
      let postBody = opts['category'];
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling updateCategoryById");
      }

      let pathParams = {
        'categoryId': categoryId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/category/{categoryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * カテゴリ更新
     * カテゴリ更新 
     * @param {String} categoryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Category} opts.category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateCategoryById(categoryId, opts) {
      return this.updateCategoryByIdWithHttpInfo(categoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
