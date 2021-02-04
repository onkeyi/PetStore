<?php

namespace App\Http\Controllers\api;

use App\Http\Requests\OrderRequest;
use App\Models\Order;

use Auth;

class StoreController extends ApiController
{
    public function index()
    {
        $userId = Auth::guard('sanctum')->id();

        return $this->successResponse(
            Order::where('user_id', $userId)
                ->with(['pet', 'user'])
                ->orderBy('created_at', 'desc')
                ->paginate(5)
        );
    }

    public function order(OrderRequest $request)
    {
    }

    public function getOrder($orderId)
    {
    }

    public function deleteOrder($orderId)
    {
    }

    public function inventory()
    {
    }
}
