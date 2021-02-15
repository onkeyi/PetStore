<?php

namespace App\Http\Controllers\api;

use App\Http\Requests\OrderStoreRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\pet;
use Carbon\Carbon;

class OrderController extends ApiController
{
    public function getAllOrders()
    {
        return $this->successResponse(
            Order::where('user_id', $this->userId)
                ->with(['pet', 'orderUser'])
                ->orderBy('created_at', 'desc')
                ->paginate($this->maxPage)
        );
    }

    public function addNewOrder(OrderStoreRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = $this->userId;
        $validated['ship_date'] = Carbon::parse($validated['ship_date']);
        $order = new Order($validated);
        $validated['id'] = $order->save();
        return $this->successResponse($validated);
    }

    public function getOrderById(Order $order)
    {
        return $this->successResponse($order->load(['pet', 'orderUser']));
    }

    public function updateOrderById(Order $order)
    {
        $this->authorize('update', $order);
    }

    public function deleteOrderById(Order $order)
    {
        $this->authorize('destroy', $order);
        return $this->successResponse($order->delete());
    }

    public function inventory()
    {
        $inventory = Pet::select(DB::raw('status, count(status) as count'))
            ->groupBy('status')
            ->get();
        $result = [];
        foreach ($inventory as $i) {
            $result[$i->status] = $i->count;
        }
        return $this->successResponse($result);
    }
}
