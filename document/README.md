# Documentation for PetStore API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CategoryApi* | [**addNewCategory**](Apis/CategoryApi.md#addnewcategory) | **POST** /category | カテゴリ新規登録
*CategoryApi* | [**deleteCategoryById**](Apis/CategoryApi.md#deletecategorybyid) | **DELETE** /category/{categoryId} | カテゴリ削除
*CategoryApi* | [**getAllCategorys**](Apis/CategoryApi.md#getallcategorys) | **GET** /categories | カテゴリ一覧
*CategoryApi* | [**getCategoryById**](Apis/CategoryApi.md#getcategorybyid) | **GET** /category/{categoryId} | カテゴリ取得
*CategoryApi* | [**updateCategoryById**](Apis/CategoryApi.md#updatecategorybyid) | **PUT** /category/{categoryId} | カテゴリ更新
*OrderApi* | [**addNewOrder**](Apis/OrderApi.md#addneworder) | **POST** /order | オーダー登録
*OrderApi* | [**deleteOrderById**](Apis/OrderApi.md#deleteorderbyid) | **DELETE** /order/{orderId} | オーダー削除
*OrderApi* | [**getAllOrder**](Apis/OrderApi.md#getallorder) | **GET** /orders | オーダー一覧取得
*OrderApi* | [**getOrderById**](Apis/OrderApi.md#getorderbyid) | **GET** /order/{orderId} | オーダー取得
*OrderApi* | [**updateOrderById**](Apis/OrderApi.md#updateorderbyid) | **PUT** /order/{orderId} | オーダー更新
*PetApi* | [**addNewPet**](Apis/PetApi.md#addnewpet) | **POST** /pet | ペット新規登録
*PetApi* | [**addNewPetComment**](Apis/PetApi.md#addnewpetcomment) | **POST** /pet/comment | post new comment
*PetApi* | [**deletePetById**](Apis/PetApi.md#deletepetbyid) | **DELETE** /pet/{petId} | ペット情報削除
*PetApi* | [**deletePetCommentById**](Apis/PetApi.md#deletepetcommentbyid) | **DELETE** /pet/{petCommentId}/comment | ペット情報削除
*PetApi* | [**findPetByCategory**](Apis/PetApi.md#findpetbycategory) | **GET** /pet/findByCategory | カテゴリで検索
*PetApi* | [**findPetByStatus**](Apis/PetApi.md#findpetbystatus) | **GET** /pet/findByStatus | ステータスで検索
*PetApi* | [**findPetByTag**](Apis/PetApi.md#findpetbytag) | **GET** /pet/findByTags | タグで検索
*PetApi* | [**getAllPets**](Apis/PetApi.md#getallpets) | **GET** /pets | ペット一覧取得
*PetApi* | [**getPetById**](Apis/PetApi.md#getpetbyid) | **GET** /pet/{petId} | ペット情報取得
*PetApi* | [**getPetComments**](Apis/PetApi.md#getpetcomments) | **GET** /pet/{petId}/comments | ペットコメント
*PetApi* | [**updatePetById**](Apis/PetApi.md#updatepetbyid) | **PUT** /pet/{petId} | ペット情報更新
*PetApi* | [**uploadImage**](Apis/PetApi.md#uploadimage) | **POST** /pet/uploadImage | アップロードペットイメージ
*UserApi* | [**addNewUserFavorite**](Apis/UserApi.md#addnewuserfavorite) | **POST** /user/favorite | お気に入り登録
*UserApi* | [**deleteUser**](Apis/UserApi.md#deleteuser) | **DELETE** /user | ユーザー削除
*UserApi* | [**deleteUserById**](Apis/UserApi.md#deleteuserbyid) | **DELETE** /user/{userId} | ユーザー削除
*UserApi* | [**deleteUserFavoriteByPetId**](Apis/UserApi.md#deleteuserfavoritebypetid) | **DELETE** /user/{petId}/favorite/ | お気に入り削除
*UserApi* | [**findUserByName**](Apis/UserApi.md#finduserbyname) | **GET** /user/findUserByName | ユーザー検索
*UserApi* | [**getUser**](Apis/UserApi.md#getuser) | **GET** /user | ユーザー情報取得
*UserApi* | [**getUserFavorites**](Apis/UserApi.md#getuserfavorites) | **GET** /user/favorites | お気に入り一覧取得
*UserApi* | [**getUserOrders**](Apis/UserApi.md#getuserorders) | **GET** /user/orders | User Orders
*UserApi* | [**getUserPets**](Apis/UserApi.md#getuserpets) | **GET** /user/pets | User pets.
*UserApi* | [**login**](Apis/UserApi.md#login) | **POST** /login | ログイン
*UserApi* | [**logout**](Apis/UserApi.md#logout) | **GET** /logout | ログアウト
*UserApi* | [**registerNewUser**](Apis/UserApi.md#registernewuser) | **POST** /user | 新規ユーザー登録
*UserApi* | [**updateUser**](Apis/UserApi.md#updateuser) | **PUT** /user | ユーザー情報更新
*UserApi* | [**updateUserById**](Apis/UserApi.md#updateuserbyid) | **PUT** /user/{userId} | ユーザー情報更新
*UserApi* | [**uploadAvatarImage**](Apis/UserApi.md#uploadavatarimage) | **POST** /user/avatar | アップロードユーザーイメージ


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Category](./Models/Category.md)
 - [Error400](./Models/Error400.md)
 - [Error500](./Models/Error500.md)
 - [InlineResponse200](./Models/InlineResponse200.md)
 - [InlineResponse2001](./Models/InlineResponse2001.md)
 - [Order](./Models/Order.md)
 - [Pet](./Models/Pet.md)
 - [PetComment](./Models/PetComment.md)
 - [RequestAuthLogin](./Models/RequestAuthLogin.md)
 - [RequestAuthRegister](./Models/RequestAuthRegister.md)
 - [RequestFavoriteStore](./Models/RequestFavoriteStore.md)
 - [RequestOrderStore](./Models/RequestOrderStore.md)
 - [RequestOrderUpdate](./Models/RequestOrderUpdate.md)
 - [RequestPetStore](./Models/RequestPetStore.md)
 - [RequestPetUpdate](./Models/RequestPetUpdate.md)
 - [ResponseOk](./Models/ResponseOk.md)
 - [ResponsePegination](./Models/ResponsePegination.md)
 - [ResponsePeginationLinks](./Models/ResponsePeginationLinks.md)
 - [Unexpected](./Models/Unexpected.md)
 - [User](./Models/User.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="apiKey"></a>
### apiKey

- **Type**: API key
- **API key parameter name**: API-KEY
- **Location**: HTTP header

<a name="bearer"></a>
### bearer

- **Type**: HTTP basic authentication

