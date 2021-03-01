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
import Error400 from '../model/Error400';
import Error500 from '../model/Error500';
import InlineResponse2002 from '../model/InlineResponse2002';
import Pet from '../model/Pet';
import PetComment from '../model/PetComment';
import RequestPetStore from '../model/RequestPetStore';
import RequestPetUpdate from '../model/RequestPetUpdate';
import ResponsePegination from '../model/ResponsePegination';
import Unexpected from '../model/Unexpected';

/**
* Pet service.
* @module api/PetApi
* @version 0.1.1
*/
export default class PetApi {

    /**
    * Constructs a new PetApi. 
    * @alias module:api/PetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addNewPet operation.
     * @callback module:api/PetApi~addNewPetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ペット新規登録
     * ペット新規登録 - category は　categoriesから選択したID - tags : tagsテーブルにある場合、ID登録、ない場合 tagsテーブルに新規登録 - イメージアップロードは　api/pet/uploadImage 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestPetStore} opts.requestPetStore 
     * @param {module:api/PetApi~addNewPetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    addNewPet(opts, callback) {
      opts = opts || {};
      let postBody = opts['requestPetStore'];

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
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/pet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addNewPetComment operation.
     * @callback module:api/PetApi~addNewPetCommentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * post new comment
     * comment post
     * @param {Object} opts Optional parameters
     * @param {module:model/PetComment} opts.petComment 
     * @param {module:api/PetApi~addNewPetCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    addNewPetComment(opts, callback) {
      opts = opts || {};
      let postBody = opts['petComment'];

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
        '/pet/comment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePetById operation.
     * @callback module:api/PetApi~deletePetByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ペット情報削除
     * @param {Number} petId 
     * @param {module:api/PetApi~deletePetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deletePetById(petId, callback) {
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling deletePetById");
      }

      let pathParams = {
        'petId': petId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/pet/{petId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePetCommentById operation.
     * @callback module:api/PetApi~deletePetCommentByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ペット情報削除
     * @param {Number} petCommentId 
     * @param {module:api/PetApi~deletePetCommentByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deletePetCommentById(petCommentId, callback) {
      let postBody = null;
      // verify the required parameter 'petCommentId' is set
      if (petCommentId === undefined || petCommentId === null) {
        throw new Error("Missing the required parameter 'petCommentId' when calling deletePetCommentById");
      }

      let pathParams = {
        'petCommentId': petCommentId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/pet/comment/{petCommentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findPetByCategory operation.
     * @callback module:api/PetApi~findPetByCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsePegination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * カテゴリで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.category 
     * @param {module:api/PetApi~findPetByCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponsePegination}
     */
    findPetByCategory(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'category': opts['category']
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
        '/pet/findByCategory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findPetByStatus operation.
     * @callback module:api/PetApi~findPetByStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsePegination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ステータスで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.status 
     * @param {Number} opts.page 
     * @param {module:api/PetApi~findPetByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponsePegination}
     */
    findPetByStatus(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'status': opts['status'],
        'page': opts['page']
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
        '/pet/findByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findPetByTag operation.
     * @callback module:api/PetApi~findPetByTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsePegination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * タグで検索
     * タグで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag 
     * @param {Number} opts.page 
     * @param {module:api/PetApi~findPetByTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponsePegination}
     */
    findPetByTag(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'tag': opts['tag'],
        'page': opts['page']
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
        '/pet/findByTags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPets operation.
     * @callback module:api/PetApi~getAllPetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponsePegination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ペット一覧取得
     * stagusがavailableはorder可能
     * @param {Object} opts Optional parameters
     * @param {String} opts.order 
     * @param {String} opts.sorted 
     * @param {Number} opts.page 
     * @param {module:api/PetApi~getAllPetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponsePegination}
     */
    getAllPets(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'order': opts['order'],
        'sorted': opts['sorted'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = ResponsePegination;
      return this.apiClient.callApi(
        '/pets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommentByPetId operation.
     * @callback module:api/PetApi~getCommentByPetIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PetComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ペットコメント
     * Pet comments.
     * @param {Number} petId 
     * @param {module:api/PetApi~getCommentByPetIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PetComment>}
     */
    getCommentByPetId(petId, callback) {
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling getCommentByPetId");
      }

      let pathParams = {
        'petId': petId
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
      let returnType = [PetComment];
      return this.apiClient.callApi(
        '/pet/{petId}/comment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPetById operation.
     * @callback module:api/PetApi~getPetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ペット情報取得
     * @param {Number} petId 
     * @param {module:api/PetApi~getPetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pet}
     */
    getPetById(petId, callback) {
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling getPetById");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = Pet;
      return this.apiClient.callApi(
        '/pet/{petId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePetById operation.
     * @callback module:api/PetApi~updatePetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ペット情報更新
     * 更新処理
     * @param {Number} petId 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestPetUpdate} opts.requestPetUpdate 
     * @param {module:api/PetApi~updatePetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    updatePetById(petId, opts, callback) {
      opts = opts || {};
      let postBody = opts['requestPetUpdate'];
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling updatePetById");
      }

      let pathParams = {
        'petId': petId
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
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/pet/{petId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadImage operation.
     * @callback module:api/PetApi~uploadImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * アップロードペットイメージ
     * イメージファイルアップロード - tmpフォルダへ保存 - pet 新規登録、修正する成功時、 petsフォルダへ移動
     * @param {module:api/PetApi~uploadImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    uploadImage(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/pet/uploadImage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
