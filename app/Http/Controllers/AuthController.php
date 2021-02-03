<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\AuthRegisterRequest;
use App\Http\Requests\AuthLoginRequest;

use App\Models\User;
use App\Notifications\LoginNotification;


class AuthController extends Controller
{
    public function register(AuthRegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)

        ]);

        return response()->json($user);
    }

    public function login(AuthLoginRequest $request)
    {
        if (Auth::attempt(
            [
                'email' => $request->email,
                'password' => $request->password
            ]
        )) {
            $user = Auth::user();
            $user->tokens()->delete();
            $token = $user->createToken($user->email, ['server:update', 'server:read']);
            // $user->notify(new LoginNotification());
            return response()->json([
                'token' => $token->plainTextToken
            ]);
        }
    }

    public function createWithArray()
    {
    }

    public function createWithList()
    {
    }

    public function getUserByName($username)
    {
    }

    public function deleteUserByName($username)
    {
    }

    public function updateUserByName($username)
    {
    }
}
