<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
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

    public function update(Pet $pet)
    {
        return Auth::guard('sanctum')->id() === $pet->user_id;
    }

    public function delete(Pet $pet)
    {
        return Auth::guard('sanctum')->id() === $pet->user_id;
    }
}
