<?php

namespace App\Http\Controllers\api;

use App\Models\Pet;
use App\Http\Requests\PetCommentStoreRequest;
use App\Models\PetComment;
use Auth;

class PetCommentController extends ApiController
{
    //
    public function addNewPetComment(PetCommentStoreRequest $request, Pet $pet)
    {

        $validated = $request->validated();
        $validated['user_id'] = $this->userId;
        $validated['id'] = PetComment::create($validated);
        return $this->successResponse($validated);
    }

    public function deletePetComment(PetComment $petComment)
    {
        // delete policy
        $this->authorize('destroy');
        $petComment->delte();
        return $this->successResponse();
    }

    public function getPetComments(Pet $pet)
    {
        $comment = PetComment::where('pet_id', $pet->id)->with(['user', 'pet'])->get();

        return $this->successResponse($comment);
    }
}
