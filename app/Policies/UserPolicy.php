<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function update(User $user)
    {
        return Auth::guard('sanctum')->id() === $user->id;
    }

    public function destroy(User $user)
    {
        return Auth::guard('sanctum')->id() === $user->id;
    }
}