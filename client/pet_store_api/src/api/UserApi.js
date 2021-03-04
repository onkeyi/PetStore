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
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import Order from '../model/Order';
import Pet from '../model/Pet';
import RequestAuthLogin from '../model/RequestAuthLogin';
import RequestAuthRegister from '../model/RequestAuthRegister';
import Unexpected from '../model/Unexpected';
import User from '../model/User';

/**
* User service.
* @module api/UserApi
* @version 0.1.1
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * ユーザー削除
     * ユーザー削除 - softdelete
     * @param {Number} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteUserByIdWithHttpInfo(userId) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserById");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'bearer'];
      let contentTypes = [];
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/user/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ユーザー削除
     * ユーザー削除 - softdelete
     * @param {Number} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteUserById(userId) {
      return this.deleteUserByIdWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ユーザー検索
     * ユーザー名で検索 - ユーザー名前後一致検索 - 結果がない場合、[]を返す。
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/User>} and HTTP response
     */
    findUserByNameWithHttpInfo(username) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling findUserByName");
      }

      let pathParams = {
      };
      let queryParams = {
        'username': username
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [User];
      return this.apiClient.callApi(
        '/user/findUserByName', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ユーザー検索
     * ユーザー名で検索 - ユーザー名前後一致検索 - 結果がない場合、[]を返す。
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/User>}
     */
    findUserByName(username) {
      return this.findUserByNameWithHttpInfo(username)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * User Orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Order>} and HTTP response
     */
    getUserOrdersWithHttpInfo() {
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
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = [Order];
      return this.apiClient.callApi(
        '/user/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * User Orders
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Order>}
     */
    getUserOrders() {
      return this.getUserOrdersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * User pets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Pet>} and HTTP response
     */
    getUserPetsWithHttpInfo() {
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
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = [Pet];
      return this.apiClient.callApi(
        '/user/pets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * User pets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Pet>}
     */
    getUserPets() {
      return this.getUserPetsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ログイン
     * ログイン ## Validations   - email: メールアドレスチェック   - password max 20 ## ロジック   - ユーザーToken削除   - 新しいToken成功生成
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestAuthLogin} opts.requestAuthLogin 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    loginWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['requestAuthLogin'];

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
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ログイン
     * ログイン ## Validations   - email: メールアドレスチェック   - password max 20 ## ロジック   - ユーザーToken削除   - 新しいToken成功生成
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestAuthLogin} opts.requestAuthLogin 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    login(opts) {
      return this.loginWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ログアウト
     * ログアウト処理 - client: Token 削除 - server: ユーザーToken削除
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    logoutWithHttpInfo() {
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
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/logout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ログアウト
     * ログアウト処理 - client: Token 削除 - server: ユーザーToken削除
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    logout() {
      return this.logoutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 新規ユーザー登録
     * 新規ユーザー登録 ## Permission   - None ## Validations   - email: メールアドレスチェック、Usersテーブル重複チェック    - name: 最大40文字 ## Logic   - 登録成功するとメール通知   - 通知メールのURLに email_verity.verity_string   - メールアドレスチェック後email_verified_at更新   - email_verified_atがnullではない場合、認証済みユーザーと認識する。
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestAuthRegister} opts.requestAuthRegister 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    registerNewUserWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['requestAuthRegister'];

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
      let accepts = ['application/json', 'applicaiton/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 新規ユーザー登録
     * 新規ユーザー登録 ## Permission   - None ## Validations   - email: メールアドレスチェック、Usersテーブル重複チェック    - name: 最大40文字 ## Logic   - 登録成功するとメール通知   - 通知メールのURLに email_verity.verity_string   - メールアドレスチェック後email_verified_at更新   - email_verified_atがnullではない場合、認証済みユーザーと認識する。
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestAuthRegister} opts.requestAuthRegister 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    registerNewUser(opts) {
      return this.registerNewUserWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ユーザー情報更新
     * ユーザー情報更新項目 - ユーザー名更新 - ステータス更新
     * @param {Number} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    updateUserByIdWithHttpInfo(userId, opts) {
      opts = opts || {};
      let postBody = opts['user'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserById");
      }

      let pathParams = {
        'userId': userId
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
        '/user/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ユーザー情報更新
     * ユーザー情報更新項目 - ユーザー名更新 - ステータス更新
     * @param {Number} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    updateUserById(userId, opts) {
      return this.updateUserByIdWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
