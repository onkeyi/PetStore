<?php

namespace App\Http\Controllers\api;

use App\Exceptions\ParameterNotfoundException;
use App\Models\User;
use App\Http\Requests\UserUpdateRequest;

class UserController extends ApiController
{
    public function findUserByName()
    {
        $query = Request::all();
        if (!isset($query) || empty($query['username'])) {
            throw new ParameterNotfoundException;
        }
        $user = new User;
        $result = $user->where('name', $query['username'])->get();
        return $this->successResponse($result);
    }

    public function updateUserById(UserUpdateRequest $request, User $user)
    {
        $this->authorize('update', $user);
        $validated = $request->validated();
        $user->update($validated);
        return $this->successResponse(['id' => $user->id]);
    }

    public function deleteUserById(User $user)
    {
        $this->authorize('delete', $user);
        $user->delete();
        return $this->successResponse();
    }
}
