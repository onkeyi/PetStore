# CategoryApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewCategory**](CategoryApi.md#addNewCategory) | **POST** /category | カテゴリ新規登録
[**deleteCategoryById**](CategoryApi.md#deleteCategoryById) | **DELETE** /category/{categoryId} | カテゴリ削除
[**getAllCategorys**](CategoryApi.md#getAllCategorys) | **GET** /categories | カテゴリ一覧
[**getCategoryById**](CategoryApi.md#getCategoryById) | **GET** /category/{categoryId} | カテゴリ取得
[**updateCategoryById**](CategoryApi.md#updateCategoryById) | **PUT** /category/{categoryId} | カテゴリ更新


<a name="addNewCategory"></a>
# **addNewCategory**
> Object addNewCategory(Category)

カテゴリ新規登録

    カテゴリ登録 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Category** | [**Category**](../Models/Category.md)|  | [optional]

### Return type

[**Object**](../Models/object.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json

<a name="deleteCategoryById"></a>
# **deleteCategoryById**
> response_ok deleteCategoryById(categoryId)

カテゴリ削除

    カテゴリ削除 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**|  | [default to null]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="getAllCategorys"></a>
# **getAllCategorys**
> List getAllCategorys()

カテゴリ一覧

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/category.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="getCategoryById"></a>
# **getCategoryById**
> category getCategoryById(categoryId)

カテゴリ取得

    カテゴリ取得 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Integer**|  | [default to null]

### Return type

[**category**](../Models/category.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="updateCategoryById"></a>
# **updateCategoryById**
> response_ok updateCategoryById(categoryId, Category)

カテゴリ更新

    カテゴリ更新 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**|  | [default to null]
 **Category** | [**Category**](../Models/Category.md)|  | [optional]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json

