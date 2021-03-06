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

import ApiClient from '../ApiClient';

/**
 * The RequestPetStore model module.
 * @module model/RequestPetStore
 * @version 0.1.1
 */
class RequestPetStore {
    /**
     * Constructs a new <code>RequestPetStore</code>.
     * @alias module:model/RequestPetStore
     * @param name {String} 
     */
    constructor(name) { 
        
        RequestPetStore.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RequestPetStore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestPetStore} obj Optional instance to populate.
     * @return {module:model/RequestPetStore} The populated <code>RequestPetStore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestPetStore();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Number');
            }
            if (data.hasOwnProperty('photo_urls')) {
                obj['photo_urls'] = ApiClient.convertToType(data['photo_urls'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RequestPetStore.prototype['name'] = undefined;

/**
 * @member {Number} category_id
 */
RequestPetStore.prototype['category_id'] = undefined;

/**
 * @member {Array.<String>} photo_urls
 */
RequestPetStore.prototype['photo_urls'] = undefined;

/**
 * @member {Array.<String>} tags
 */
RequestPetStore.prototype['tags'] = undefined;

/**
 * @member {String} description
 */
RequestPetStore.prototype['description'] = undefined;






export default RequestPetStore;

