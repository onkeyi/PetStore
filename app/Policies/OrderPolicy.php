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
        return Auth::guard('sanctum')->id() === $order->user_id;
    }

    public function destroy(Order $order)
    {
        return Auth::guard('sanctum')->id() === $order->user_id;
    }
}