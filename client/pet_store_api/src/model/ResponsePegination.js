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
import ResponsePeginationLinks from './ResponsePeginationLinks';

/**
 * The ResponsePegination model module.
 * @module model/ResponsePegination
 * @version 0.1.1
 */
class ResponsePegination {
    /**
     * Constructs a new <code>ResponsePegination</code>.
     * @alias module:model/ResponsePegination
     */
    constructor() { 
        
        ResponsePegination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponsePegination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponsePegination} obj Optional instance to populate.
     * @return {module:model/ResponsePegination} The populated <code>ResponsePegination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponsePegination();

            if (data.hasOwnProperty('current_page')) {
                obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
            }
            if (data.hasOwnProperty('first_page_url')) {
                obj['first_page_url'] = ApiClient.convertToType(data['first_page_url'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Number');
            }
            if (data.hasOwnProperty('last_page')) {
                obj['last_page'] = ApiClient.convertToType(data['last_page'], 'Number');
            }
            if (data.hasOwnProperty('last_page_url')) {
                obj['last_page_url'] = ApiClient.convertToType(data['last_page_url'], 'Number');
            }
            if (data.hasOwnProperty('next_page_url')) {
                obj['next_page_url'] = ApiClient.convertToType(data['next_page_url'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
            if (data.hasOwnProperty('prev_page_url')) {
                obj['prev_page_url'] = ApiClient.convertToType(data['prev_page_url'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [ResponsePeginationLinks]);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} current_page
 */
ResponsePegination.prototype['current_page'] = undefined;

/**
 * @member {String} first_page_url
 */
ResponsePegination.prototype['first_page_url'] = undefined;

/**
 * @member {Number} from
 */
ResponsePegination.prototype['from'] = undefined;

/**
 * @member {Number} last_page
 */
ResponsePegination.prototype['last_page'] = undefined;

/**
 * @member {Number} last_page_url
 */
ResponsePegination.prototype['last_page_url'] = undefined;

/**
 * @member {String} next_page_url
 */
ResponsePegination.prototype['next_page_url'] = undefined;

/**
 * @member {String} path
 */
ResponsePegination.prototype['path'] = undefined;

/**
 * @member {Number} per_page
 */
ResponsePegination.prototype['per_page'] = undefined;

/**
 * @member {String} prev_page_url
 */
ResponsePegination.prototype['prev_page_url'] = undefined;

/**
 * @member {Number} to
 */
ResponsePegination.prototype['to'] = undefined;

/**
 * @member {Number} total
 */
ResponsePegination.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ResponsePeginationLinks>} links
 */
ResponsePegination.prototype['links'] = undefined;

/**
 * @member {Array.<Object>} data
 */
ResponsePegination.prototype['data'] = undefined;






export default ResponsePegination;

