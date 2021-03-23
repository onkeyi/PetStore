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
import Category from './Category';
import User from './User';

/**
 * The Pet model module.
 * @module model/Pet
 * @version 0.1.1
 */
class Pet {
    /**
     * Constructs a new <code>Pet</code>.
     * @alias module:model/Pet
     */
    constructor() { 
        
        Pet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pet} obj Optional instance to populate.
     * @return {module:model/Pet} The populated <code>Pet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pet();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('photo_urls')) {
                obj['photo_urls'] = ApiClient.convertToType(data['photo_urls'], ['String']);
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = Category.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = User.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('comments_count')) {
                obj['comments_count'] = ApiClient.convertToType(data['comments_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Pet.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Pet.prototype['name'] = undefined;

/**
 * @member {String} status
 */
Pet.prototype['status'] = undefined;

/**
 * @member {String} description
 */
Pet.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
Pet.prototype['tags'] = undefined;

/**
 * @member {Array.<String>} photo_urls
 */
Pet.prototype['photo_urls'] = undefined;

/**
 * @member {module:model/Category} category
 */
Pet.prototype['category'] = undefined;

/**
 * @member {module:model/User} owner
 */
Pet.prototype['owner'] = undefined;

/**
 * @member {Number} comments_count
 */
Pet.prototype['comments_count'] = undefined;






export default Pet;

