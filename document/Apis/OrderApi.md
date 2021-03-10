# OrderApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNewOrder**](OrderApi.md#addNewOrder) | **POST** /order | オーダー登録
[**deleteOrderById**](OrderApi.md#deleteOrderById) | **DELETE** /order/{orderId} | オーダー削除
[**getAllOrder**](OrderApi.md#getAllOrder) | **GET** /orders | オーダー一覧取得
[**getOrderById**](OrderApi.md#getOrderById) | **GET** /order/{orderId} | オーダー取得
[**updateOrderById**](OrderApi.md#updateOrderById) | **PUT** /order/{orderId} | オーダー更新


<a name="addNewOrder"></a>
# **addNewOrder**
> addNewOrder(RequestOrderStore)

オーダー登録

    オーダー登録

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RequestOrderStore** | [**RequestOrderStore**](../Models/RequestOrderStore.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: application/json

<a name="deleteOrderById"></a>
# **deleteOrderById**
> response_ok deleteOrderById(orderId)

オーダー削除

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Integer**|  | [default to null]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="getAllOrder"></a>
# **getAllOrder**
> response_pegination getAllOrder()

オーダー一覧取得

### Parameters
This endpoint does not need any parameter.

### Return type

[**response_pegination**](../Models/response_pegination.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="getOrderById"></a>
# **getOrderById**
> order getOrderById(orderId)

オーダー取得

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Integer**|  | [default to null]

### Return type

[**order**](../Models/order.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: applicaiton/json, application/json

<a name="updateOrderById"></a>
# **updateOrderById**
> response_ok updateOrderById(orderId, RequestOrderUpdate)

オーダー更新

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Integer**|  | [default to null]
 **RequestOrderUpdate** | [**RequestOrderUpdate**](../Models/RequestOrderUpdate.md)|  | [optional]

### Return type

[**response_ok**](../Models/response_ok.md)

### Authorization

[apiKey](../README.md#apiKey), [bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: applicaiton/json
- **Accept**: applicaiton/json, application/json

