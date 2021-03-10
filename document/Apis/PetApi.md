# PetApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewPet**](PetApi.md#addNewPet) | **POST** /pet | ペット新規登録
[**addNewPetComment**](PetApi.md#addNewPetComment) | **POST** /pet/comment | post new comment
[**deletePetById**](PetApi.md#deletePetById) | **DELETE** /pet/{petId} | ペット情報削除
[**deletePetCommentById**](PetApi.md#deletePetCommentById) | **DELETE** /pet/{petCommentId}/comment | ペット情報削除
[**findPetByCategory**](PetApi.md#findPetByCategory) | **GET** /pet/findByCategory | カテゴリで検索
[**findPetByStatus**](PetApi.md#findPetByStatus) | **GET** /pet/findByStatus | ステータスで検索
[**findPetByTag**](PetApi.md#findPetByTag) | **GET** /pet/findByTags | タグで検索
[**getAllPets**](PetApi.md#getAllPets) | **GET** /pets | ペット一覧取得
[**getPetById**](PetApi.md#getPetById) | **GET** /pet/{petId} | ペット情報取得
[**getPetComments**](PetApi.md#getPetComments) | **GET** /pet/{petId}/comments | ペットコメント
[**updatePetById**](PetApi.md#updatePetById) | **PUT** /pet/{petId} | ペット情報更新
[**uploadImage**](PetApi.md#uploadImage) | **POST** /pet/uploadImage | アップロードペットイメージ


<a name="addNewPet"></a>
# **addNewPet**
> pet addNewPet(RequestPetStore)

ペット新規登録

    ペット新規登録 - category は　categoriesから選択したID - tags : tagsテーブルにある場合、ID登録、ない場合 tagsテーブルに新規登録 - イメージアップロードは　api/pet/uploadImage 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RequestPetStore** | [**RequestPetStore**](../Models/RequestPetStore.md)|  | [optional]

### Return type

[**pet**](../Models/pet.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json, applicaiton/json

<a name="addNewPetComment"></a>
# **addNewPetComment**
> Object addNewPetComment(PetComment)

post new comment

    comment post

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PetComment** | [**PetComment**](../Models/PetComment.md)|  | [optional]

### Return type

[**Object**](../Models/object.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json

<a name="deletePetById"></a>
# **deletePetById**
> response_ok deletePetById(petId)

ペット情報削除

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
- **Accept**: applicaiton/json, application/json

<a name="deletePetCommentById"></a>
# **deletePetCommentById**
> response_ok deletePetCommentById(petCommentId)

ペット情報削除

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petCommentId** | **Integer**|  | [default to null]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="findPetByCategory"></a>
# **findPetByCategory**
> response_pegination findPetByCategory(category)

カテゴリで検索

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | [optional] [default to null]

### Return type

[**response_pegination**](../Models/response_pegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="findPetByStatus"></a>
# **findPetByStatus**
> response_pegination findPetByStatus(status, page)

ステータスで検索

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**|  | [optional] [default to null]
 **page** | **Integer**|  | [optional] [default to null]

### Return type

[**response_pegination**](../Models/response_pegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="findPetByTag"></a>
# **findPetByTag**
> response_pegination findPetByTag(tag, page)

タグで検索

    タグで検索

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**|  | [optional] [default to null]
 **page** | **Integer**|  | [optional] [default to null]

### Return type

[**response_pegination**](../Models/response_pegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="getAllPets"></a>
# **getAllPets**
> response_pegination getAllPets(order, sorted, page)

ペット一覧取得

    stagusがavailableはorder可能

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **String**|  | [optional] [default to null]
 **sorted** | **String**|  | [optional] [default to null]
 **page** | **Integer**|  | [optional] [default to null]

### Return type

[**response_pegination**](../Models/response_pegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, applicaiton/json

<a name="getPetById"></a>
# **getPetById**
> pet getPetById(petId)

ペット情報取得

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Integer**|  | [default to null]

### Return type

[**pet**](../Models/pet.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="getPetComments"></a>
# **getPetComments**
> List getPetComments(petId)

ペットコメント

    Pet comments.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Integer**|  | [default to null]

### Return type

[**List**](../Models/pet_comment.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="updatePetById"></a>
# **updatePetById**
> response_ok updatePetById(petId, RequestPetUpdate)

ペット情報更新

    更新処理

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Integer**|  | [default to null]
 **RequestPetUpdate** | [**RequestPetUpdate**](../Models/RequestPetUpdate.md)|  | [optional]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json

<a name="uploadImage"></a>
# **uploadImage**
> inline_response_200_2 uploadImage(image)

アップロードペットイメージ

    イメージファイルアップロード - tmpフォルダへ保存 - pet 新規登録、修正する成功時、 petsフォルダへ移動

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**|  | [optional] [default to null]

### Return type

[**inline_response_200_2**](../Models/inline_response_200_2.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: applicaiton/json

