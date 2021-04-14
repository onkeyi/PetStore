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
 * The RequestUserEvalution model module.
 * @module model/RequestUserEvalution
 * @version 0.1.1
 */
class RequestUserEvalution {
    /**
     * Constructs a new <code>RequestUserEvalution</code>.
     * @alias module:model/RequestUserEvalution
     * @param orderId {Number} 
     * @param evalution {String} 
     */
    constructor(orderId, evalution) { 
        
        RequestUserEvalution.initialize(this, orderId, evalution);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderId, evalution) { 
        obj['order_id'] = orderId;
        obj['evalution'] = evalution;
    }

    /**
     * Constructs a <code>RequestUserEvalution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestUserEvalution} obj Optional instance to populate.
     * @return {module:model/RequestUserEvalution} The populated <code>RequestUserEvalution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestUserEvalution();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('evalution')) {
                obj['evalution'] = ApiClient.convertToType(data['evalution'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} user_id
 */
RequestUserEvalution.prototype['user_id'] = undefined;

/**
 * @member {Number} order_id
 */
RequestUserEvalution.prototype['order_id'] = undefined;

/**
 * @member {String} evalution
 */
RequestUserEvalution.prototype['evalution'] = undefined;

/**
 * @member {String} comment
 */
RequestUserEvalution.prototype['comment'] = undefined;






export default RequestUserEvalution;

