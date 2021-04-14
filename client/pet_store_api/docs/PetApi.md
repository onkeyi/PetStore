# PetStoreApi.PetApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewPet**](PetApi.md#addNewPet) | **POST** /pet | ペット新規登録
[**addNewPetComment**](PetApi.md#addNewPetComment) | **POST** /pet/comment | post new comment
[**deleteOrderByPetId**](PetApi.md#deleteOrderByPetId) | **DELETE** /pet/{petId}/order | ペットオーダー情報削除
[**deletePetById**](PetApi.md#deletePetById) | **DELETE** /pet/{petId} | ペット情報削除
[**deletePetCommentById**](PetApi.md#deletePetCommentById) | **DELETE** /pet/{petCommentId}/comment | ペット情報削除
[**findPetByCategory**](PetApi.md#findPetByCategory) | **GET** /pet/findByCategory | カテゴリで検索
[**findPetByStatus**](PetApi.md#findPetByStatus) | **GET** /pet/findByStatus | ステータスで検索
[**findPetByTag**](PetApi.md#findPetByTag) | **GET** /pet/findByTags | タグで検索
[**getAllPets**](PetApi.md#getAllPets) | **GET** /pets | ペット一覧取得
[**getPetById**](PetApi.md#getPetById) | **GET** /pet/{petId} | ペット情報取得
[**getPetComments**](PetApi.md#getPetComments) | **GET** /pet/{petId}/comments | ペットコメント
[**updatePetById**](PetApi.md#updatePetById) | **PUT** /pet/{petId} | ペット情報更新
[**updatePetLike**](PetApi.md#updatePetLike) | **PUT** /pet/like | update pet like
[**uploadImage**](PetApi.md#uploadImage) | **POST** /pet/uploadImage | アップロードペットイメージ



## addNewPet

> Pet addNewPet(opts)

ペット新規登録

ペット新規登録 - category は　categoriesから選択したID - tags : tagsテーブルにある場合、ID登録、ない場合 tagsテーブルに新規登録 - イメージアップロードは　api/pet/uploadImage 

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

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'requestPetStore': new PetStoreApi.RequestPetStore() // RequestPetStore | 
};
apiInstance.addNewPet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestPetStore** | [**RequestPetStore**](RequestPetStore.md)|  | [optional] 

### Return type

[**Pet**](Pet.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json


## addNewPetComment

> Object addNewPetComment(opts)

post new comment

comment post

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

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'petComment': new PetStoreApi.PetComment() // PetComment | 
};
apiInstance.addNewPetComment(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petComment** | [**PetComment**](PetComment.md)|  | [optional] 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json


## deleteOrderByPetId

> ResponseOk deleteOrderByPetId(petId)

ペットオーダー情報削除

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

let apiInstance = new PetStoreApi.PetApi();
let petId = 56; // Number | 
apiInstance.deleteOrderByPetId(petId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**|  | 

### Return type

[**ResponseOk**](ResponseOk.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## deletePetById

> ResponseOk deletePetById(petId)

ペット情報削除

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

let apiInstance = new PetStoreApi.PetApi();
let petId = 56; // Number | 
apiInstance.deletePetById(petId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**|  | 

### Return type

[**ResponseOk**](ResponseOk.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## deletePetCommentById

> ResponseOk deletePetCommentById(petCommentId)

ペット情報削除

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

let apiInstance = new PetStoreApi.PetApi();
let petCommentId = 56; // Number | 
apiInstance.deletePetCommentById(petCommentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petCommentId** | **Number**|  | 

### Return type

[**ResponseOk**](ResponseOk.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## findPetByCategory

> ResponsePegination findPetByCategory(opts)

カテゴリで検索

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'sort': "sort_example", // String | 
  'category': "category_example" // String | 
};
apiInstance.findPetByCategory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **String**|  | [optional] 
 **category** | **String**|  | [optional] 

### Return type

[**ResponsePegination**](ResponsePegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## findPetByStatus

> ResponsePegination findPetByStatus(opts)

ステータスで検索

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'sort': "sort_example", // String | 
  'status': "status_example", // String | 
  'page': 56 // Number | 
};
apiInstance.findPetByStatus(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**ResponsePegination**](ResponsePegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## findPetByTag

> ResponsePegination findPetByTag(opts)

タグで検索

タグで検索

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'sort': "sort_example", // String | 
  'tag': "tag_example", // String | 
  'page': 56 // Number | 
};
apiInstance.findPetByTag(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**ResponsePegination**](ResponsePegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## getAllPets

> ResponsePegination getAllPets(opts)

ペット一覧取得

stagusがavailableはorder可能

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'sort': "sort_example", // String | 
  'page': 56 // Number | 
};
apiInstance.getAllPets(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**ResponsePegination**](ResponsePegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json


## getPetById

> Pet getPetById(petId)

ペット情報取得

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.PetApi();
let petId = 56; // Number | 
apiInstance.getPetById(petId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**|  | 

### Return type

[**Pet**](Pet.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## getPetComments

> ResponsePegination getPetComments(petId)

ペットコメント

Pet comments.

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

let apiInstance = new PetStoreApi.PetApi();
let petId = 56; // Number | 
apiInstance.getPetComments(petId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**|  | 

### Return type

[**ResponsePegination**](ResponsePegination.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json


## updatePetById

> ResponseOk updatePetById(petId, opts)

ペット情報更新

更新処理

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

let apiInstance = new PetStoreApi.PetApi();
let petId = 56; // Number | 
let opts = {
  'requestPetUpdate': new PetStoreApi.RequestPetUpdate() // RequestPetUpdate | 
};
apiInstance.updatePetById(petId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**|  | 
 **requestPetUpdate** | [**RequestPetUpdate**](RequestPetUpdate.md)|  | [optional] 

### Return type

[**ResponseOk**](ResponseOk.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json


## updatePetLike

> ResponseOk updatePetLike(opts)

update pet like

update like

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

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'pet': new PetStoreApi.Pet() // Pet | 
};
apiInstance.updatePetLike(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**Pet**](Pet.md)|  | [optional] 

### Return type

[**ResponseOk**](ResponseOk.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json


## uploadImage

> InlineResponse2001 uploadImage(opts)

アップロードペットイメージ

イメージファイルアップロード - tmpフォルダへ保存 - pet 新規登録、修正する成功時、 petsフォルダへ移動

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

let apiInstance = new PetStoreApi.PetApi();
let opts = {
  'image': "/path/to/file" // File | 
};
apiInstance.uploadImage(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: applicaiton/json

