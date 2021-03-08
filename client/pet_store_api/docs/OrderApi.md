# PetStoreApi.OrderApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewOrder**](OrderApi.md#addNewOrder) | **POST** /order | オーダー登録
[**deleteOrderById**](OrderApi.md#deleteOrderById) | **DELETE** /order/{orderId} | オーダー削除
[**getAllOrder**](OrderApi.md#getAllOrder) | **GET** /orders | オーダー一覧取得
[**getOrderById**](OrderApi.md#getOrderById) | **GET** /order/{orderId} | オーダー取得
[**updateOrderById**](OrderApi.md#updateOrderById) | **PUT** /order/{orderId} | オーダー更新



## addNewOrder

> addNewOrder(opts)

オーダー登録

オーダー登録

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (bearer) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PetStoreApi.OrderApi();
let opts = {
  'requestOrderStore': new PetStoreApi.RequestOrderStore() // RequestOrderStore | 
};
apiInstance.addNewOrder(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestOrderStore** | [**RequestOrderStore**](RequestOrderStore.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json


## deleteOrderById

> deleteOrderById(orderId)

オーダー削除

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (bearer) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PetStoreApi.OrderApi();
let orderId = 56; // Number | 
apiInstance.deleteOrderById(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllOrder

> ResponsePegination getAllOrder()

オーダー一覧取得

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.OrderApi();
apiInstance.getAllOrder().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ResponsePegination**](ResponsePegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## getOrderById

> getOrderById(orderId)

オーダー取得

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.OrderApi();
let orderId = 56; // Number | 
apiInstance.getOrderById(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrderById

> updateOrderById(orderId, opts)

オーダー更新

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure Bearer (bearer) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PetStoreApi.OrderApi();
let orderId = 56; // Number | 
let opts = {
  'requestOrderUpdate': new PetStoreApi.RequestOrderUpdate() // RequestOrderUpdate | 
};
apiInstance.updateOrderById(orderId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**|  | 
 **requestOrderUpdate** | [**RequestOrderUpdate**](RequestOrderUpdate.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json

