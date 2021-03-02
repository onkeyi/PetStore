# PetStoreApi.CategoryApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewCategory**](CategoryApi.md#addNewCategory) | **POST** /category | カテゴリ新規登録
[**deleteCategoryById**](CategoryApi.md#deleteCategoryById) | **DELETE** /category/{categoryId} | カテゴリ削除
[**getAllCategorys**](CategoryApi.md#getAllCategorys) | **GET** /categories | カテゴリ一覧
[**getCategoryById**](CategoryApi.md#getCategoryById) | **GET** /category/{categoryId} | カテゴリ取得
[**updateCategoryById**](CategoryApi.md#updateCategoryById) | **PUT** /category/{categoryId} | カテゴリ更新



## addNewCategory

> Object addNewCategory(opts)

カテゴリ新規登録

カテゴリ登録 

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

let apiInstance = new PetStoreApi.CategoryApi();
let opts = {
  'category': new PetStoreApi.Category() // Category | 
};
apiInstance.addNewCategory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**Category**](Category.md)|  | [optional] 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json


## deleteCategoryById

> deleteCategoryById(categoryId)

カテゴリ削除

カテゴリ削除 

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

let apiInstance = new PetStoreApi.CategoryApi();
let categoryId = 56; // Number | 
apiInstance.deleteCategoryById(categoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCategorys

> [Category] getAllCategorys()

カテゴリ一覧

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.CategoryApi();
apiInstance.getAllCategorys().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Category]**](Category.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## getCategoryById

> Category getCategoryById(categoryId)

カテゴリ取得

カテゴリ取得 

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.CategoryApi();
let categoryId = 56; // Number | 
apiInstance.getCategoryById(categoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**|  | 

### Return type

[**Category**](Category.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## updateCategoryById

> Object updateCategoryById(categoryId, opts)

カテゴリ更新

カテゴリ更新 

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.CategoryApi();
let categoryId = "categoryId_example"; // String | 
let opts = {
  'category': new PetStoreApi.Category() // Category | 
};
apiInstance.updateCategoryById(categoryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | 
 **category** | [**Category**](Category.md)|  | [optional] 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json

