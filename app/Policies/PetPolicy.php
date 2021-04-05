<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Pet;
use App\Models\User;
use App\Models\Order;
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

    public function comments(?User $user = null,Pet $pet)
    {
        $userId = Auth::guard('sanctum')->id();
        if ($userId === $pet->user_id) {
            return true;
        }

        $checkOrderUser = Order::where(array('pet_id'=>$pet->id,'user_id'=>$userId))->first();
        if (isset($checkOrderUser)) {
            return true;
        }
        return false;
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
