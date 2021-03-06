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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/AddressDirection', 'model/CallDirectionSubscription', 'model/CallDirectionSubscriptionResponse', 'model/CallDirectionSubscriptionResponseCallDirectionSubscription', 'model/CallDirectionSubscriptionWrapper', 'model/CallEventFilter', 'model/CallEvents', 'model/CallSessionInformation', 'model/CallbackReference', 'model/CallbackReferenceResponse', 'model/ClickToCall', 'model/ClickToCallResponse', 'model/ClientCorrelator', 'model/NotificationFormat', 'model/NotifyURL', 'model/Participant', 'model/ParticipantObject', 'model/ResourceURL', 'api/ClicktocallApi', 'api/SubscriptionApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Address'), require('./model/AddressDirection'), require('./model/CallDirectionSubscription'), require('./model/CallDirectionSubscriptionResponse'), require('./model/CallDirectionSubscriptionResponseCallDirectionSubscription'), require('./model/CallDirectionSubscriptionWrapper'), require('./model/CallEventFilter'), require('./model/CallEvents'), require('./model/CallSessionInformation'), require('./model/CallbackReference'), require('./model/CallbackReferenceResponse'), require('./model/ClickToCall'), require('./model/ClickToCallResponse'), require('./model/ClientCorrelator'), require('./model/NotificationFormat'), require('./model/NotifyURL'), require('./model/Participant'), require('./model/ParticipantObject'), require('./model/ResourceURL'), require('./api/ClicktocallApi'), require('./api/SubscriptionApi'));
  }
}(function(ApiClient, Address, AddressDirection, CallDirectionSubscription, CallDirectionSubscriptionResponse, CallDirectionSubscriptionResponseCallDirectionSubscription, CallDirectionSubscriptionWrapper, CallEventFilter, CallEvents, CallSessionInformation, CallbackReference, CallbackReferenceResponse, ClickToCall, ClickToCallResponse, ClientCorrelator, NotificationFormat, NotifyURL, Participant, ParticipantObject, ResourceURL, ClicktocallApi, SubscriptionApi) {
  'use strict';

  /**
   * The_first_version_of_the_Nokia_TAS_Call_Direction_API_is_an_exciting_step_forward_towards_making_it_easier_for_developers_to_have_open_access_to_their_operators_network_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var NokiaTasCallDirectionApi = require('index'); // See note below*.
   * var xxxSvc = new NokiaTasCallDirectionApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new NokiaTasCallDirectionApi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new NokiaTasCallDirectionApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new NokiaTasCallDirectionApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The AddressDirection model constructor.
     * @property {module:model/AddressDirection}
     */
    AddressDirection: AddressDirection,
    /**
     * The CallDirectionSubscription model constructor.
     * @property {module:model/CallDirectionSubscription}
     */
    CallDirectionSubscription: CallDirectionSubscription,
    /**
     * The CallDirectionSubscriptionResponse model constructor.
     * @property {module:model/CallDirectionSubscriptionResponse}
     */
    CallDirectionSubscriptionResponse: CallDirectionSubscriptionResponse,
    /**
     * The CallDirectionSubscriptionResponseCallDirectionSubscription model constructor.
     * @property {module:model/CallDirectionSubscriptionResponseCallDirectionSubscription}
     */
    CallDirectionSubscriptionResponseCallDirectionSubscription: CallDirectionSubscriptionResponseCallDirectionSubscription,
    /**
     * The CallDirectionSubscriptionWrapper model constructor.
     * @property {module:model/CallDirectionSubscriptionWrapper}
     */
    CallDirectionSubscriptionWrapper: CallDirectionSubscriptionWrapper,
    /**
     * The CallEventFilter model constructor.
     * @property {module:model/CallEventFilter}
     */
    CallEventFilter: CallEventFilter,
    /**
     * The CallEvents model constructor.
     * @property {module:model/CallEvents}
     */
    CallEvents: CallEvents,
    /**
     * The CallSessionInformation model constructor.
     * @property {module:model/CallSessionInformation}
     */
    CallSessionInformation: CallSessionInformation,
    /**
     * The CallbackReference model constructor.
     * @property {module:model/CallbackReference}
     */
    CallbackReference: CallbackReference,
    /**
     * The CallbackReferenceResponse model constructor.
     * @property {module:model/CallbackReferenceResponse}
     */
    CallbackReferenceResponse: CallbackReferenceResponse,
    /**
     * The ClickToCall model constructor.
     * @property {module:model/ClickToCall}
     */
    ClickToCall: ClickToCall,
    /**
     * The ClickToCallResponse model constructor.
     * @property {module:model/ClickToCallResponse}
     */
    ClickToCallResponse: ClickToCallResponse,
    /**
     * The ClientCorrelator model constructor.
     * @property {module:model/ClientCorrelator}
     */
    ClientCorrelator: ClientCorrelator,
    /**
     * The NotificationFormat model constructor.
     * @property {module:model/NotificationFormat}
     */
    NotificationFormat: NotificationFormat,
    /**
     * The NotifyURL model constructor.
     * @property {module:model/NotifyURL}
     */
    NotifyURL: NotifyURL,
    /**
     * The Participant model constructor.
     * @property {module:model/Participant}
     */
    Participant: Participant,
    /**
     * The ParticipantObject model constructor.
     * @property {module:model/ParticipantObject}
     */
    ParticipantObject: ParticipantObject,
    /**
     * The ResourceURL model constructor.
     * @property {module:model/ResourceURL}
     */
    ResourceURL: ResourceURL,
    /**
     * The ClicktocallApi service constructor.
     * @property {module:api/ClicktocallApi}
     */
    ClicktocallApi: ClicktocallApi,
    /**
     * The SubscriptionApi service constructor.
     * @property {module:api/SubscriptionApi}
     */
    SubscriptionApi: SubscriptionApi
  };

  return exports;
}));
