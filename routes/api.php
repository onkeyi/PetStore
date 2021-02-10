<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\api\PetController;
use App\Http\Controllers\api\OrderController;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\TagController;
use App\Http\Controllers\api\CategoryController;
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
        Route::get('pet', [PetController::class, 'getAllPets']);

        /** USER */
        Route::post('login', [AuthController::class, 'login']);
        Route::post('user', [AuthController::class, 'registerNewUser']);

        Route::get('store/inventory', [StoreController::class, 'inventory']);

        Route::middleware('auth')->group(
            function () {
                /** Pet */
                Route::post('pet', [PetController::class, 'store']);
                Route::put('pet', [PetController::class, 'update']);
                Route::delete('pet/{pet}', [PetController::class, 'destroy']);
                Route::post('pet/uploadImage', [PetController::class, 'uploadImage']);

                /** Order */
                Route::get('orders', [OrderController::class, 'getAllOrder']);
                Route::post('order', [OrderController::class, 'addNewOrder']);
                Route::get('order/{order}', [OrderController::class, 'getOrderById']);
                Route::put('order/{order}', [OrderController::class, 'updateOrderById']);
                Route::delete('order/{order}', [OrderController::class, 'deleteOrderById']);

                /** Tag */
                Route::get('tags', [TagController::class, 'getAllTags']);
                Route::post('tag', [TagController::class, 'addNewTag']);
                Route::get('tag/{tag}', [TagController::class, 'getTagById']);
                Route::put('tag/{tag}', [TagController::class, 'updateTagById']);
                Route::delete('tag/{tag}', [TagController::class, 'deleteTagById']);

                /** Category */
                Route::get('categories', [CategoryController::class, 'getAllCategories']);
                Route::post('category', [CategoryController::class, 'addNewCategory']);
                Route::get('category/{category}', [CateogryController::class, 'getCategoryById']);
                Route::put('category/{category}', [CategoryController::class, 'updateCategoryById']);
                Route::delete('category/{category}', [CategoryController::class, 'deleteCategoryById']);

                /** USER  */
                Route::get('user/{user}', [AuthController::class, 'getUserByName']);
                Route::put('user/{user}', [UserController::class, 'updateUserById']);
                Route::delete('user/{user}', [UserController::class, 'deleteUserById']);
                /** logout */
                Route::get('logout', [AuthController::class, 'logout']);
            }
        );
    }
);