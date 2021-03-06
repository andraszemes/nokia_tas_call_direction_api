# nokia_tas_call_direction_api

NokiaTasCallDirectionApi - JavaScript client for nokia_tas_call_direction_api
The first version of the Nokia TAS Call Direction API is an exciting step forward towards making it easier for developers to have open access to their operator's network.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install nokia_tas_call_direction_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/nokia_tas_call_direction_api
then install it via:

```shell
    npm install YOUR_USERNAME/nokia_tas_call_direction_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NokiaTasCallDirectionApi = require('nokia_tas_call_direction_api');

var defaultClient = NokiaTasCallDirectionApi.ApiClient.instance;

// Configure API key authorization: nokia_mn_api_auth
var nokia_mn_api_auth = defaultClient.authentications['nokia_mn_api_auth'];
nokia_mn_api_auth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//nokia_mn_api_auth.apiKeyPrefix['Authorization'] = "Token"

var api = new NokiaTasCallDirectionApi.SubscriptionApi()

//CallDirectionSubscription object that needs to be sent to the Nokia TAS
var CallDirectionSubscription = {
        callDirectionSubscription: {
            callbackReference: {
                notifyURL: "YOUR NOTIFY URL"
            },
            filter: {
                address: ["YOUR SIP ADDRESS e.g.: sip:+00000000000@ims8.wirelessfuture.com"],
                criteria: ["CHOOSEN CRITERIA"],
                addressDirection: "CHOOSEN ADDRESSDIRECTION"
            },
            clientCorrelator: "YOUR UNIQUE ID e.g.:test123"
        }
    };

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSubscription(CallDirectionSubscription, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://mn.developer.nokia.com/tasseeAPI*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NokiaTasCallDirectionApi.ClicktocallApi* | [**clickToCall**](docs/ClicktocallApi.md#clickToCall) | **POST** /callcontrol/v1/clicktocall | Create a click to call request
*NokiaTasCallDirectionApi.SubscriptionApi* | [**createSubscription**](docs/SubscriptionApi.md#createSubscription) | **POST** /callnotification/v1/subscriptions/callDirection | Create a call direction subscription
*NokiaTasCallDirectionApi.SubscriptionApi* | [**deleteSubscription**](docs/SubscriptionApi.md#deleteSubscription) | **DELETE** /callnotification/v1/subscriptions/callDirection/subs | Delete a call direction subscription
*NokiaTasCallDirectionApi.SubscriptionApi* | [**getSubscription**](docs/SubscriptionApi.md#getSubscription) | **GET** /callnotification/v1/subscriptions/callDirection/subs | Read a call direction subscription


## Documentation for Models

 - [NokiaTasCallDirectionApi.Address](docs/Address.md)
 - [NokiaTasCallDirectionApi.AddressDirection](docs/AddressDirection.md)
 - [NokiaTasCallDirectionApi.CallDirectionSubscription](docs/CallDirectionSubscription.md)
 - [NokiaTasCallDirectionApi.CallDirectionSubscriptionResponse](docs/CallDirectionSubscriptionResponse.md)
 - [NokiaTasCallDirectionApi.CallDirectionSubscriptionResponseCallDirectionSubscription](docs/CallDirectionSubscriptionResponseCallDirectionSubscription.md)
 - [NokiaTasCallDirectionApi.CallDirectionSubscriptionWrapper](docs/CallDirectionSubscriptionWrapper.md)
 - [NokiaTasCallDirectionApi.CallEventFilter](docs/CallEventFilter.md)
 - [NokiaTasCallDirectionApi.CallEvents](docs/CallEvents.md)
 - [NokiaTasCallDirectionApi.CallSessionInformation](docs/CallSessionInformation.md)
 - [NokiaTasCallDirectionApi.CallbackReference](docs/CallbackReference.md)
 - [NokiaTasCallDirectionApi.CallbackReferenceResponse](docs/CallbackReferenceResponse.md)
 - [NokiaTasCallDirectionApi.ClickToCall](docs/ClickToCall.md)
 - [NokiaTasCallDirectionApi.ClickToCallResponse](docs/ClickToCallResponse.md)
 - [NokiaTasCallDirectionApi.ClientCorrelator](docs/ClientCorrelator.md)
 - [NokiaTasCallDirectionApi.NotificationFormat](docs/NotificationFormat.md)
 - [NokiaTasCallDirectionApi.NotifyURL](docs/NotifyURL.md)
 - [NokiaTasCallDirectionApi.Participant](docs/Participant.md)
 - [NokiaTasCallDirectionApi.ParticipantObject](docs/ParticipantObject.md)
 - [NokiaTasCallDirectionApi.ResourceURL](docs/ResourceURL.md)


## Documentation for Authorization


### nokia_mn_api_auth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

