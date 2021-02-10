<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\AuthLoginRequest;
use App\Models\User;

class AuthController extends Controller
{
    public function registerNewUser(UserRegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)

        ]);

        return response()->json(['id' => $user->id]);
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
            $token = $user->createToken($user->email);
            return response()->json([
                'token' => $token->plainTextToken
            ]);
        }
    }

    public function logout()
    {
        $user = Auth::guard('sanctum')->user();
        $user->tokens()->delete();
        return response('{}');
    }
}