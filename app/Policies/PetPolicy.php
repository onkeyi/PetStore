<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;
use App\Models\Pet;
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

    public function update(?User $user, Pet $pet)
    {
        return Auth::guard('sanctum')->id() === $pet->user_id;
    }

    public function destroy(?User $user, Pet $pet)
    {
        return Auth::guard('sanctum')->id() === $pet->user_id;
    }
}
