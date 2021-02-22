# PetStoreApi.TagApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewTag**](TagApi.md#addNewTag) | **POST** /tag | Tag 登録
[**deleteTagById**](TagApi.md#deleteTagById) | **DELETE** /tag/{tagId} | Tag情報削除
[**getAllTags**](TagApi.md#getAllTags) | **GET** /tags | Tag一覧
[**getTagById**](TagApi.md#getTagById) | **GET** /tag/{tagId} | Tag情報
[**updateTagById**](TagApi.md#updateTagById) | **PUT** /tag/{tagId} | Tag情報更新



## addNewTag

> Category addNewTag(opts)

Tag 登録

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.TagApi();
let opts = {
  'tag': new PetStoreApi.Tag() // Tag | 
};
apiInstance.addNewTag(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**Tag**](Tag.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json


## deleteTagById

> Category deleteTagById(tagId)

Tag情報削除

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

let apiInstance = new PetStoreApi.TagApi();
let tagId = 56; // Number | 
apiInstance.deleteTagById(tagId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **Number**|  | 

### Return type

[**Category**](Category.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## getAllTags

> ResponsePegination getAllTags()

Tag一覧

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.TagApi();
apiInstance.getAllTags((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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


## getTagById

> Category getTagById(tagId)

Tag情報

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.TagApi();
let tagId = 56; // Number | 
apiInstance.getTagById(tagId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **Number**|  | 

### Return type

[**Category**](Category.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## updateTagById

> Category updateTagById(tagId, opts)

Tag情報更新

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

let apiInstance = new PetStoreApi.TagApi();
let tagId = 56; // Number | 
let opts = {
  'tag': new PetStoreApi.Tag() // Tag | 
};
apiInstance.updateTagById(tagId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **Number**|  | 
 **tag** | [**Tag**](Tag.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json

