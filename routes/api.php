<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\api\PetController;
use App\Http\Controllers\api\OrderController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\TagController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\PetCommentController;
use App\Http\Controllers\api\PetLikeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('apikey')->group(
    function () {

        Route::get('pet/findByStatus', [PetController::class, 'findByStatus']);
        Route::get('pet/findByTags', [PetController::class, 'findByTags']);
        Route::get('pet/findByCategory', [PetController::class, 'findByCategory']);
        Route::get('pet/{pet}', [PetController::class, 'getPetById']);
        Route::get('pets', [PetController::class, 'getAllPets']);
        Route::get('pet/{pet}/comments', [PetCommentController::class, 'getPetComments']);
        Route::get('order/inventory', [OrderController::class, 'inventory']);

        /** USER */
        Route::post('login', [AuthController::class, 'login']);
        Route::post('user', [AuthController::class, 'registerNewUser']);

        Route::middleware('auth')->group(
            function () {
                /** Pet */
                Route::post('pet', [PetController::class, 'addNewPet']);
                Route::put('pet/{pet}', [PetController::class, 'updatePetById']);
                Route::delete('pet/{pet}', [PetController::class, 'deletePetById']);
                Route::post('pet/uploadImage', [PetController::class, 'uploadImage']);
                Route::delete('pet/{pet}/order', [OrderController::class, 'deleteOrderByPetId']);
                Route::post('pet/comment', [PetCommentController::class, 'addNewPetComment']);
                Route::delete('pet/{petComment}/comment/', [PetCommentController::class, 'deletePetCommentById']);
                Route::put('pet/{pet}/like', [PetController::class, 'updatePetLike']);

                /** Order */
                Route::get('orders', [OrderController::class, 'getAllOrders']);
                Route::post('order', [OrderController::class, 'addNewOrder']);
                Route::get('order/{order}', [OrderController::class, 'getOrderById']);
                Route::put('order/{order}', [OrderController::class, 'updateOrderById']);
                Route::delete('order/{order}', [OrderController::class, 'deleteOrderById']);
                Route::get('order/{order}/comments', [OrderCommentController::class, 'getOrderComments']);
                Route::post('order/comment', [OrderCommentController::class, 'addNewOrderComment']);
                Route::delete('order/{orderComment}/comment/', [OrderCommentController::class, 'deleteOrderCommentById']);

                /** USER  */
                Route::get('user', [UserController::class, 'getUser']);
                Route::put('user', [UserController::class, 'updateUser']);
                Route::delete('user', [UserController::class, 'deleteUser']);
                Route::post('user/avatar', [UserController::class, 'uploadAvatarImage']);
                Route::get('user/findUserByName', [UserController::class, 'findUserByName']);
                Route::get('user/pets', [UserController::class, 'getUserPets']);
                Route::get('user/orders', [UserController::class, 'getUserOrders']);
                Route::get('user/favorites', [UserController::class, 'getUserFavorites']);
                Route::put('user/{pet}/favorite', [UserController::class, 'updateUserFavorite']);

                Route::post('user/{order}/evalution', [UserController::class, 'addNewEvalution']);
                /** logout */
                Route::get('logout', [AuthController::class, 'logout']);
            }
        );

        // Route::middleware('admin')->group(
        // function () {
        /** Category */
        Route::get('categories', [CategoryController::class, 'getAllCategories']);
        Route::post('category', [CategoryController::class, 'addNewCategory']);
        Route::get('category/{category}', [CategoryController::class, 'getCategoryById']);
        Route::put('category/{category}', [CategoryController::class, 'updateCategoryById']);
        Route::delete('category/{category}', [CategoryController::class, 'deleteCategoryById']);
        Route::put('user/{user}', [UserController::class, 'updateUserById']);
        Route::delete('user/{user}', [UserController::class, 'deleteUserById']);
        // }
        // );
    }
);
