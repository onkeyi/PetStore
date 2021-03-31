/**
 * PetStore API
 * ## PetStore OpenAPI 設計 - バックエンド： Laravel - フロントエンド： Vue
 *
 * The version of the OpenAPI document: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Category from './model/Category';
import Error400 from './model/Error400';
import Error500 from './model/Error500';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import Order from './model/Order';
import OrderInventory from './model/OrderInventory';
import Pet from './model/Pet';
import PetComment from './model/PetComment';
import RequestAuthLogin from './model/RequestAuthLogin';
import RequestAuthRegister from './model/RequestAuthRegister';
import RequestFavoriteStore from './model/RequestFavoriteStore';
import RequestOrderStore from './model/RequestOrderStore';
import RequestOrderUpdate from './model/RequestOrderUpdate';
import RequestPetStore from './model/RequestPetStore';
import RequestPetUpdate from './model/RequestPetUpdate';
import ResponseOk from './model/ResponseOk';
import ResponsePegination from './model/ResponsePegination';
import ResponsePeginationLinks from './model/ResponsePeginationLinks';
import Unexpected from './model/Unexpected';
import User from './model/User';
import CategoryApi from './api/CategoryApi';
import OrderApi from './api/OrderApi';
import PetApi from './api/PetApi';
import UserApi from './api/UserApi';


/**
* _PetStore_OpenAPI_設計__バックエンド_Laravel__フロントエンド_Vue.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PetStoreApi = require('index'); // See note below*.
* var xxxSvc = new PetStoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PetStoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PetStoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PetStoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Error400 model constructor.
     * @property {module:model/Error400}
     */
    Error400,

    /**
     * The Error500 model constructor.
     * @property {module:model/Error500}
     */
    Error500,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderInventory model constructor.
     * @property {module:model/OrderInventory}
     */
    OrderInventory,

    /**
     * The Pet model constructor.
     * @property {module:model/Pet}
     */
    Pet,

    /**
     * The PetComment model constructor.
     * @property {module:model/PetComment}
     */
    PetComment,

    /**
     * The RequestAuthLogin model constructor.
     * @property {module:model/RequestAuthLogin}
     */
    RequestAuthLogin,

    /**
     * The RequestAuthRegister model constructor.
     * @property {module:model/RequestAuthRegister}
     */
    RequestAuthRegister,

    /**
     * The RequestFavoriteStore model constructor.
     * @property {module:model/RequestFavoriteStore}
     */
    RequestFavoriteStore,

    /**
     * The RequestOrderStore model constructor.
     * @property {module:model/RequestOrderStore}
     */
    RequestOrderStore,

    /**
     * The RequestOrderUpdate model constructor.
     * @property {module:model/RequestOrderUpdate}
     */
    RequestOrderUpdate,

    /**
     * The RequestPetStore model constructor.
     * @property {module:model/RequestPetStore}
     */
    RequestPetStore,

    /**
     * The RequestPetUpdate model constructor.
     * @property {module:model/RequestPetUpdate}
     */
    RequestPetUpdate,

    /**
     * The ResponseOk model constructor.
     * @property {module:model/ResponseOk}
     */
    ResponseOk,

    /**
     * The ResponsePegination model constructor.
     * @property {module:model/ResponsePegination}
     */
    ResponsePegination,

    /**
     * The ResponsePeginationLinks model constructor.
     * @property {module:model/ResponsePeginationLinks}
     */
    ResponsePeginationLinks,

    /**
     * The Unexpected model constructor.
     * @property {module:model/Unexpected}
     */
    Unexpected,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The CategoryApi service constructor.
    * @property {module:api/CategoryApi}
    */
    CategoryApi,

    /**
    * The OrderApi service constructor.
    * @property {module:api/OrderApi}
    */
    OrderApi,

    /**
    * The PetApi service constructor.
    * @property {module:api/PetApi}
    */
    PetApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
