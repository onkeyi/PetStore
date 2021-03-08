<?php

namespace App\Policies;

use App\Models\Order;
use Illuminate\Auth\Access\HandlesAuthorization;
use Auth;

class OrderPolicy
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

    public function update(Order $order)
    {
        $data = Pet::where(array('pet_id'=>$order->pet_id,'user_id'=>Auth::guard('sanctum')->id()));
        return isset($data) ? true : false
    }

    public function delete(Order $order)
    {
        return Auth::guard('sanctum')->id() === $order->user_id;
    }
}
