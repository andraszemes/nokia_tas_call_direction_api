/**
 * Nokia TAS Call Direction API
 * The first version of the Nokia TAS Call Direction API is an exciting step forward towards making it easier for developers to have open access to their operator's network.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: openapi.support@nokia.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CallEventFilter', 'model/CallbackReference', 'model/ClientCorrelator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CallEventFilter'), require('./CallbackReference'), require('./ClientCorrelator'));
  } else {
    // Browser globals (root is window)
    if (!root.NokiaTasCallDirectionApi) {
      root.NokiaTasCallDirectionApi = {};
    }
    root.NokiaTasCallDirectionApi.CallDirectionSubscription = factory(root.NokiaTasCallDirectionApi.ApiClient, root.NokiaTasCallDirectionApi.CallEventFilter, root.NokiaTasCallDirectionApi.CallbackReference, root.NokiaTasCallDirectionApi.ClientCorrelator);
  }
}(this, function(ApiClient, CallEventFilter, CallbackReference, ClientCorrelator) {
  'use strict';




  /**
   * The CallDirectionSubscription model module.
   * @module model/CallDirectionSubscription
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CallDirectionSubscription</code>.
   * @alias module:model/CallDirectionSubscription
   * @class
   * @param callbackReference {module:model/CallbackReference} 
   * @param filter {module:model/CallEventFilter} 
   * @param clientCorrelator {module:model/ClientCorrelator} 
   */
  var exports = function(callbackReference, filter, clientCorrelator) {
    var _this = this;

    _this['callbackReference'] = callbackReference;
    _this['filter'] = filter;
    _this['clientCorrelator'] = clientCorrelator;
  };

  /**
   * Constructs a <code>CallDirectionSubscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallDirectionSubscription} obj Optional instance to populate.
   * @return {module:model/CallDirectionSubscription} The populated <code>CallDirectionSubscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('callbackReference')) {
        obj['callbackReference'] = CallbackReference.constructFromObject(data['callbackReference']);
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = CallEventFilter.constructFromObject(data['filter']);
      }
      if (data.hasOwnProperty('clientCorrelator')) {
        obj['clientCorrelator'] = ClientCorrelator.constructFromObject(data['clientCorrelator']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CallbackReference} callbackReference
   */
  exports.prototype['callbackReference'] = undefined;
  /**
   * @member {module:model/CallEventFilter} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * @member {module:model/ClientCorrelator} clientCorrelator
   */
  exports.prototype['clientCorrelator'] = undefined;



  return exports;
}));


