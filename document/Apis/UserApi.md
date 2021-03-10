# UserApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewUserFavorite**](UserApi.md#addNewUserFavorite) | **POST** /user/favorite | お気に入り登録
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user | ユーザー削除
[**deleteUserById**](UserApi.md#deleteUserById) | **DELETE** /user/{userId} | ユーザー削除
[**deleteUserFavoriteByPetId**](UserApi.md#deleteUserFavoriteByPetId) | **DELETE** /user/{petId}/favorite/ | お気に入り削除
[**findUserByName**](UserApi.md#findUserByName) | **GET** /user/findUserByName | ユーザー検索
[**getUser**](UserApi.md#getUser) | **GET** /user | ユーザー情報取得
[**getUserFavorites**](UserApi.md#getUserFavorites) | **GET** /user/favorites | お気に入り一覧取得
[**getUserOrders**](UserApi.md#getUserOrders) | **GET** /user/orders | 
[**getUserPets**](UserApi.md#getUserPets) | **GET** /user/pets | 
[**login**](UserApi.md#login) | **POST** /login | ログイン
[**logout**](UserApi.md#logout) | **GET** /logout | ログアウト
[**registerNewUser**](UserApi.md#registerNewUser) | **POST** /user | 新規ユーザー登録
[**updateUser**](UserApi.md#updateUser) | **PUT** /user | ユーザー情報更新
[**updateUserById**](UserApi.md#updateUserById) | **PUT** /user/{userId} | ユーザー情報更新


<a name="addNewUserFavorite"></a>
# **addNewUserFavorite**
> Object addNewUserFavorite(RequestFavoriteStore)

お気に入り登録

    ユーザーお気に入り登録

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RequestFavoriteStore** | [**RequestFavoriteStore**](../Models/RequestFavoriteStore.md)|  | [optional]

### Return type

[**Object**](../Models/object.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json

<a name="deleteUser"></a>
# **deleteUser**
> response_ok deleteUser()

ユーザー削除

    ユーザー削除 - softdelete

### Parameters
This endpoint does not need any parameter.

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="deleteUserById"></a>
# **deleteUserById**
> response_ok deleteUserById(userId)

ユーザー削除

    ユーザー削除 - softdelete

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="deleteUserFavoriteByPetId"></a>
# **deleteUserFavoriteByPetId**
> response_ok deleteUserFavoriteByPetId(petId)

お気に入り削除

    ユーザーお気に入り削除

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Integer**|  | [default to null]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="findUserByName"></a>
# **findUserByName**
> List findUserByName(username)

ユーザー検索

    ユーザー名で検索 - ユーザー名前後一致検索 - 結果がない場合、[]を返す。

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | [default to null]

### Return type

[**List**](../Models/user.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> user getUser()

ユーザー情報取得

    ユーザー情報

### Parameters
This endpoint does not need any parameter.

### Return type

[**user**](../Models/user.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="getUserFavorites"></a>
# **getUserFavorites**
> List getUserFavorites()

お気に入り一覧取得

    ユーザーお気に入り一覧取得

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/pet.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="getUserOrders"></a>
# **getUserOrders**
> List getUserOrders()



    User Orders

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/order.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="getUserPets"></a>
# **getUserPets**
> List getUserPets()



    User pets.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/pet.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="login"></a>
# **login**
> inline_response_200_1 login(RequestAuthLogin)

ログイン

    ログイン ## Validations   - email: メールアドレスチェック   - password max 20 ## ロジック   - ユーザーToken削除   - 新しいToken成功生成

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RequestAuthLogin** | [**RequestAuthLogin**](../Models/RequestAuthLogin.md)|  | [optional]

### Return type

[**inline_response_200_1**](../Models/inline_response_200_1.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json

<a name="logout"></a>
# **logout**
> Object logout()

ログアウト

    ログアウト処理 - client: Token 削除 - server: ユーザーToken削除

### Parameters
This endpoint does not need any parameter.

### Return type

[**Object**](../Models/object.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="registerNewUser"></a>
# **registerNewUser**
> inline_response_200 registerNewUser(RequestAuthRegister)

新規ユーザー登録

    新規ユーザー登録 ## Permission   - None ## Validations   - email: メールアドレスチェック、Usersテーブル重複チェック    - name: 最大40文字 ## Logic   - 登録成功するとメール通知   - 通知メールのURLに email_verity.verity_string   - メールアドレスチェック後email_verified_at更新   - email_verified_atがnullではない場合、認証済みユーザーと認識する。

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RequestAuthRegister** | [**RequestAuthRegister**](../Models/RequestAuthRegister.md)|  | [optional]

### Return type

[**inline_response_200**](../Models/inline_response_200.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json

<a name="updateUser"></a>
# **updateUser**
> response_ok updateUser(User)

ユーザー情報更新

    ユーザー情報更新項目 - ユーザー名更新 - ステータス更新

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **User** | [**User**](../Models/User.md)|  | [optional]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json

<a name="updateUserById"></a>
# **updateUserById**
> response_ok updateUserById(userId, User)

ユーザー情報更新

    ユーザー情報更新項目 - ユーザー名更新 - ステータス更新

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **User** | [**User**](../Models/User.md)|  | [optional]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json

