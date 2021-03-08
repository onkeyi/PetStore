/**
 * PetStore API
 * ## PetStore OpenAPI 設計 - バックエンド： Laravel v8.x - フロントエンド： Vue v2.x ,LaravelMix v6.x
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
import InlineResponse200 from '../model/InlineResponse200';
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
     * ペット新規登録
     * ペット新規登録 - category は　categoriesから選択したID - tags : tagsテーブルにある場合、ID登録、ない場合 tagsテーブルに新規登録 - イメージアップロードは　api/pet/uploadImage 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestPetStore} opts.requestPetStore 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    addNewPetWithHttpInfo(opts) {
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/pet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ペット新規登録
     * ペット新規登録 - category は　categoriesから選択したID - tags : tagsテーブルにある場合、ID登録、ない場合 tagsテーブルに新規登録 - イメージアップロードは　api/pet/uploadImage 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestPetStore} opts.requestPetStore 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    addNewPet(opts) {
      return this.addNewPetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * post new comment
     * comment post
     * @param {Object} opts Optional parameters
     * @param {module:model/PetComment} opts.petComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    addNewPetCommentWithHttpInfo(opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * post new comment
     * comment post
     * @param {Object} opts Optional parameters
     * @param {module:model/PetComment} opts.petComment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    addNewPetComment(opts) {
      return this.addNewPetCommentWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ペット情報削除
     * @param {Number} petId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deletePetByIdWithHttpInfo(petId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ペット情報削除
     * @param {Number} petId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deletePetById(petId) {
      return this.deletePetByIdWithHttpInfo(petId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ペット情報削除
     * @param {Number} petCommentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deletePetCommentByIdWithHttpInfo(petCommentId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ペット情報削除
     * @param {Number} petCommentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deletePetCommentById(petCommentId) {
      return this.deletePetCommentByIdWithHttpInfo(petCommentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * カテゴリで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponsePegination} and HTTP response
     */
    findPetByCategoryWithHttpInfo(opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * カテゴリで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponsePegination}
     */
    findPetByCategory(opts) {
      return this.findPetByCategoryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ステータスで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.status 
     * @param {Number} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponsePegination} and HTTP response
     */
    findPetByStatusWithHttpInfo(opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ステータスで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.status 
     * @param {Number} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponsePegination}
     */
    findPetByStatus(opts) {
      return this.findPetByStatusWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * タグで検索
     * タグで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag 
     * @param {Number} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponsePegination} and HTTP response
     */
    findPetByTagWithHttpInfo(opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * タグで検索
     * タグで検索
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag 
     * @param {Number} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponsePegination}
     */
    findPetByTag(opts) {
      return this.findPetByTagWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ペット一覧取得
     * stagusがavailableはorder可能
     * @param {Object} opts Optional parameters
     * @param {String} opts.order 
     * @param {String} opts.sorted 
     * @param {Number} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponsePegination} and HTTP response
     */
    getAllPetsWithHttpInfo(opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ペット一覧取得
     * stagusがavailableはorder可能
     * @param {Object} opts Optional parameters
     * @param {String} opts.order 
     * @param {String} opts.sorted 
     * @param {Number} opts.page 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponsePegination}
     */
    getAllPets(opts) {
      return this.getAllPetsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ペットコメント
     * Pet comments.
     * @param {Number} petId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PetComment>} and HTTP response
     */
    getCommentByPetIdWithHttpInfo(petId) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ペットコメント
     * Pet comments.
     * @param {Number} petId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PetComment>}
     */
    getCommentByPetId(petId) {
      return this.getCommentByPetIdWithHttpInfo(petId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ペット情報取得
     * @param {Number} petId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pet} and HTTP response
     */
    getPetByIdWithHttpInfo(petId) {
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

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = Pet;
      return this.apiClient.callApi(
        '/pet/{petId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ペット情報取得
     * @param {Number} petId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pet}
     */
    getPetById(petId) {
      return this.getPetByIdWithHttpInfo(petId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ペット情報更新
     * 更新処理
     * @param {Number} petId 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestPetUpdate} opts.requestPetUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    updatePetByIdWithHttpInfo(petId, opts) {
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

      let authNames = ['apiKey', 'bearer'];
      let contentTypes = ['applicaiton/json'];
      let accepts = ['applicaiton/json', 'application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/pet/{petId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ペット情報更新
     * 更新処理
     * @param {Number} petId 
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestPetUpdate} opts.requestPetUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    updatePetById(petId, opts) {
      return this.updatePetByIdWithHttpInfo(petId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * アップロードペットイメージ
     * イメージファイルアップロード - tmpフォルダへ保存 - pet 新規登録、修正する成功時、 petsフォルダへ移動
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    uploadImageWithHttpInfo() {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * アップロードペットイメージ
     * イメージファイルアップロード - tmpフォルダへ保存 - pet 新規登録、修正する成功時、 petsフォルダへ移動
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    uploadImage() {
      return this.uploadImageWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
