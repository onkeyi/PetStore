<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\DB;
use App\Http\Requests\OrderStoreRequest;
use App\Http\Requests\OrderUpdateRequest;
use App\Models\Order;
use App\Models\pet;
use Carbon\Carbon;
use Illuminate\Support\Facades\Gate;


class OrderController extends ApiController
{
    public function getAllOrders()
    {
        return $this->successResponse(
            Order::where('user_id', $this->userId)
                ->with(['pet', 'user'])
                ->orderBy('created_at', 'desc')
                ->paginate(env('APP_PER_PAGE',18))
        );
    }

    public function addNewOrder(OrderStoreRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = $this->userId;
        $validated['id'] = DB::transaction(
            function () use ($validated) {
                $order = Order::create($validated);
                $pet['status'] = 'pending';
                $pet['id'] = $validated['pet_id'];
                Pet::where(array('id'=>$validated['pet_id']))->update($pet);
                return $order->id;
            }
        );
        return $this->successResponse($validated);
    }

    public function getOrderById(Order $order)
    {
        return $this->successResponse($order->load(['pet', 'orderUser']));
    }

    public function updateOrderById(Order $order,OrderUpdateRequest $orderUpdateRequest)
    {
        $this->authorize('update', $order); // Pet Owner Only
        return $this->okResponse($order->save($orderUpdateRequest));
    }

    public function deleteOrderById(Order $order)
    {
        $this->authorize('delete', $order);
        return $this->okResponse($order->delete());
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
