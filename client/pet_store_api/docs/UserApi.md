# PetStoreApi.UserApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserById**](UserApi.md#deleteUserById) | **DELETE** /user/{userId} | ユーザー削除
[**findUserByName**](UserApi.md#findUserByName) | **GET** /user/findUserByName | ユーザー検索
[**getUserOrders**](UserApi.md#getUserOrders) | **GET** /user/{userId}/orders | 
[**getUserPets**](UserApi.md#getUserPets) | **GET** /user/{userId}/pets | 
[**login**](UserApi.md#login) | **POST** /login | ログイン
[**logout**](UserApi.md#logout) | **GET** /logout | ログアウト
[**registerNewUser**](UserApi.md#registerNewUser) | **POST** /user | 新規ユーザー登録
[**updateUserById**](UserApi.md#updateUserById) | **PUT** /user/{userId} | ユーザー情報更新



## deleteUserById

> Object deleteUserById(userId)

ユーザー削除

ユーザー削除 - softdelete

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

let apiInstance = new PetStoreApi.UserApi();
let userId = 56; // Number | 
apiInstance.deleteUserById(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json


## findUserByName

> [User] findUserByName(username)

ユーザー検索

ユーザー名で検索 - ユーザー名前後一致検索 - 結果がない場合、[]を返す。

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.UserApi();
let username = "username_example"; // String | 
apiInstance.findUserByName(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**[User]**](User.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserOrders

> [Order] getUserOrders(userId)



User Orders

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

let apiInstance = new PetStoreApi.UserApi();
let userId = 56; // Number | 
apiInstance.getUserOrders(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**[Order]**](Order.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json


## getUserPets

> [Order] getUserPets(userId)



User pets.

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

let apiInstance = new PetStoreApi.UserApi();
let userId = 56; // Number | 
apiInstance.getUserPets(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**[Order]**](Order.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json


## login

> InlineResponse2001 login(opts)

ログイン

ログイン ## Validations   - email: メールアドレスチェック   - password max 20 ## ロジック   - ユーザーToken削除   - 新しいToken成功生成

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.UserApi();
let opts = {
  'requestAuthLogin': {"email":"test@test.com","password":"password"} // RequestAuthLogin | 
};
apiInstance.login(opts, (error, data, response) => {
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
 **requestAuthLogin** | [**RequestAuthLogin**](RequestAuthLogin.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json


## logout

> Object logout()

ログアウト

ログアウト処理 - client: Token 削除 - server: ユーザーToken削除

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

let apiInstance = new PetStoreApi.UserApi();
apiInstance.logout((error, data, response) => {
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

**Object**

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json


## registerNewUser

> InlineResponse200 registerNewUser(opts)

新規ユーザー登録

新規ユーザー登録 ## Permission   - None ## Validations   - email: メールアドレスチェック、Usersテーブル重複チェック   - name: 最大20文字 ## Logic   登録成功するとメール通知

### Example

```javascript
import PetStoreApi from 'pet_store_api';
let defaultClient = PetStoreApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreApi.UserApi();
let opts = {
  'requestAuthRegister': {"name":"test","email":"test@test.com","password":"password"} // RequestAuthRegister | 
};
apiInstance.registerNewUser(opts, (error, data, response) => {
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
 **requestAuthRegister** | [**RequestAuthRegister**](RequestAuthRegister.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json


## updateUserById

> InlineResponse2002 updateUserById(userId, opts)

ユーザー情報更新

ユーザー情報更新項目 - ユーザー名更新 - ステータス更新

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

let apiInstance = new PetStoreApi.UserApi();
let userId = 56; // Number | 
let opts = {
  'user': new PetStoreApi.User() // User | 
};
apiInstance.updateUserById(userId, opts, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json

