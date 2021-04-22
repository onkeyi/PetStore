<?php

namespace App\Policies;

use App\Models\Order;
use App\Models\User;
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
    }

    public function update(?User $user, Order $order)
    {
        $data = Pet::where(['pet_id'=>$order->pet_id,'user_id'=>Auth::guard('sanctum')->id()])->get();
        return isset($data) ? true : false;
    }

    public function delete(?User $user, Order $order)
    {
        return Auth::guard('sanctum')->id() === $order->user_id;
    }

    public function deleteOrderByPetId(?User $user, Order $order)
    {
        if (!isset($order)) {
            return false;
        }
        return Auth::guard('sanctum')->id() === $order->user_id;
    }

    public function evalution(?User $user, Order $order)
    {
        if (!isset($order)) {
            return false;
        }
        return (Auth::guard('sanctum')->id() === $order->user_id && $order->status == 'completed');
    }
}
