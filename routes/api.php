<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\api\PetController;
use \App\Http\Controllers\api\StoreController;
use \App\Http\Controllers\AuthController;

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


Route::apiResource('pet', PetController::class, ['only' => ['index',  'show']]);
Route::get('pet/findByStatus', [PetController::class, 'findByStatus']);

Route::post('login', [AuthController::class, 'login']);
Route::post('user', [AuthController::class, 'register']);
Route::post('user/createWithArray', [AuthController::class, 'createWithArray']);
Route::post('user/createWithList', [AuthController::class, 'createWithList']);

Route::middleware('auth')->group(
    function () {
        Route::post('pet', [PetController::class, 'store']);
        Route::put('pet/{pet}', [PetController::class, 'update']);
        Route::delete('pet/{pet}', [PetController::class, 'destroy']);
        Route::post('pet/uploadImage', [PetController::class, 'uploadImage']);

        Route::apiResource('store', StoreController::class, ['only' => ['index',  'show']]);
        Route::post('store/order', [StoreController::class, 'order']);
        Route::get('store/order/{order}', [StoreController::class, 'getOrder']);
        Route::delete('store/order/{order}', [StoreController::class, 'deleteOrder']);
        Route::get('store/inventory', [StoreController::class, 'inventory']);

        Route::get('user/{username}', [AuthController::class, 'getUserByName']);
        Route::put('user/{username}', [AuthController::class, 'updateUserByName']);
        Route::delete('user/{username}', [AuthController::class, 'deleteUserByName']);

        Route::get('logout', [AuthController::class, 'logout']);
    }
);
