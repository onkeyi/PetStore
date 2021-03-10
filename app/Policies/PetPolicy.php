<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Pet;
use App\Models\User;
use Auth;

class PetPolicy
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

    public function update(?User $user,Pet $pet)
    {
        return Auth::guard('sanctum')->id() === $pet->user_id;
    }

    public function deletePetById(?User $user,Pet $pet)
    {
        return Auth::guard('sanctum')->id() === $pet->user_id;
    }
}
