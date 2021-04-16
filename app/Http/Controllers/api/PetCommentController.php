<?php

namespace App\Http\Controllers\api;

use App\Models\Pet;
use App\Http\Requests\PetCommentStoreRequest;
use App\Models\PetComment;
use App\Models\Order;

class PetCommentController extends ApiController
{
    //
    public function addNewPetComment(PetCommentStoreRequest $request)
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
        return $this->successResponse(PetComment::create($validated));
    }

    public function deletePetCommentById(PetComment $petComment)
    {
        // delete policy
        $this->authorize('delete', $petComment);
        return $this->okResponse($petComment->delete());
    }

    public function getPetComments(Pet $pet)
    {
        $this->authorize('comments', $pet);
        return $this->successResponse(
            PetComment::where('pet_id', $pet->id)->with('user')->paginate(env('APP_PER_PAGE', 18))
        );
    }
}
