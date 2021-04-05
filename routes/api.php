<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\api\PetController;
use App\Http\Controllers\api\OrderController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\TagController;
use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\PetCommentController;

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
        Route::get('order/inventory', [OrderController::class, 'inventory']);

        /** USER */
        Route::post('login', [AuthController::class, 'login']);
        Route::post('user', [AuthController::class, 'registerNewUser']);

        Route::middleware('auth')->group(
            function () {
                Route::post('pet/comment', [PetCommentController::class, 'addNewPetComment']);
                Route::get('pet/{pet}/comments', [PetCommentController::class, 'getPetComments']);

                /** Pet */
                Route::post('pet', [PetController::class, 'addNewPet']);
                Route::put('pet/{pet}', [PetController::class, 'updatePetById']);
                Route::delete('pet/{pet}', [PetController::class, 'deletePetById']);
                Route::post('pet/uploadImage', [PetController::class, 'uploadImage']);

                Route::delete('pet/{petComment}/comment/', [PetCommentController::class, 'deletePetCommentById']);

                /** Order */
                Route::get('orders', [OrderController::class, 'getAllOrders']);
                Route::post('order', [OrderController::class, 'addNewOrder']);
                Route::get('order/{order}', [OrderController::class, 'getOrderById']);
                Route::put('order/{order}', [OrderController::class, 'updateOrderById']);
                Route::delete('order/{order}', [OrderController::class, 'deleteOrderById']);

                /** USER  */
                Route::get('user', [UserController::class, 'getUser']);
                Route::put('user', [UserController::class, 'updateUser']);
                Route::delete('user', [UserController::class, 'deleteUser']);
                Route::get('user/findUserByName', [UserController::class, 'findUserByName']);
                Route::get('user/pets', [UserController::class, 'getUserPets']);
                Route::get('user/orders', [UserController::class, 'getUserOrders']);
                Route::get('user/favorites', [UserController::class, 'getUserFavorites']);
                Route::post('user/favorite', [UserController::class, 'addNewUserFavorite']);
                Route::delete('user/{petId}/favorite', [UserController::class, 'deleteUserFavoriteByPetId']);
                Route::post('user/avatar', [UserController::class, 'uploadAvatarImage']);
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
