<?php

namespace App\Http\Controllers\api;

use App\Models\Pet;
use App\Http\Requests\OrderCommentStoreRequest;
use App\Models\OrderComment;
use App\Models\Order;

class OrderCommentController extends ApiController
{
    //
    public function addNewOrderComment(OrderCommentStoreRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = $this->userId;
        // owner
        $owner = Pet::where(['id'=>$validated['pet_id'],'user_id'=>$this->userId])->first();
        if (!isset($owner)) {
            // check order user
            $order = Order::where('pet_id', $validated['pet_id'])->first();
            if (!isset($order) || $order->user_id != $this->userId) {
                return $this->failedResponse();
            }
        }
        return $this->successResponse(OrderComment::create($validated));
    }

    public function deleteOrderCommentById(OrderComment $orderComment)
    {
        // delete policy
        $this->authorize('delete', $orderComment);
        return $this->okResponse($orderComment->delete());
    }

    public function getOrderComments(Pet $pet)
    {
        $this->authorize('comments', $pet);
        return $this->successResponse(
            OrderComment::where('pet_id', $pet->id)->with('user')->paginate(env('APP_PER_PAGE', 18))
        );
    }
}
