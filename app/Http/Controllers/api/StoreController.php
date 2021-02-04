<?php

namespace App\Http\Controllers\api;

use App\Http\Requests\OrderRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\pet;
use Carbon\Carbon;

class StoreController extends ApiController
{
    public function index()
    {
        return $this->successResponse(
            Order::where('user_id', $this->userId)
                ->with(['pet', 'orderUser'])
                ->orderBy('created_at', 'desc')
                ->paginate(5)
        );
    }

    public function order(OrderRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = $this->userId;
        $validated['ship_date'] = Carbon::parse($validated['ship_date']);
        $order = new Order($validated);
        $validated['id'] = $order->save();
        return $this->successResponse($validated);
    }

    public function getOrder(Order $order)
    {
        return $this->successResponse($order->load(['pet', 'orderUser']));
    }

    public function deleteOrder(Order $order)
    {
        return ($order->user_id === $this->userId) ?
            $this->successMessage('Delete order:' . $order->delete()) :
            $this->failedResponse('Auth error', 405);
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
