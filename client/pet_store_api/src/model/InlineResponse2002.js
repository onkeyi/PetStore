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
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 0.1.1
 */
class InlineResponse2002 {
    /**
     * Constructs a new <code>InlineResponse2002</code>.
     * @alias module:model/InlineResponse2002
     */
    constructor() { 
        
        InlineResponse2002.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ID
 * @member {Number} id
 */
InlineResponse2002.prototype['id'] = undefined;






export default InlineResponse2002;

