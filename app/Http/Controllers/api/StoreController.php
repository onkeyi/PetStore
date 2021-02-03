<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function index()
    {
    }

    public function order(OrderRequest $request)
    {
        $input = $request->all();
        $order = Order::create($input);
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
