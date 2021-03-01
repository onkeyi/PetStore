<?php

namespace App\Http\Controllers\api;

use App\Models\Pet;
use App\Http\Requests\PetCommentStoreRequest;
use App\Models\PetComment;

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

    public function deletePetCommentById(PetComment $petComment)
    {
        // delete policy
        $this->authorize('delete', $petComment);
        $petComment->delete();
        return $this->successResponse();
    }

    public function getPetComments(Pet $pet)
    {
        return $this->successResponse(
            PetComment::where('pet_id', $pet->id)->with(['user', 'pet'])->get()
        );
    }
}