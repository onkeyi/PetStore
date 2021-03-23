<?php

namespace App\Http\Controllers\api;

use App\Models\Pet;
use App\Http\Requests\PetCommentStoreRequest;
use App\Models\PetComment;

class PetCommentController extends ApiController
{
    //
    public function addNewPetComment(PetCommentStoreRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = $this->userId;
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
        return $this->successResponse(
            PetComment::where('pet_id', $pet->id)->with(['user', 'pet'])->paginate(env('APP_PER_PAGE',18))
        );
    }
}
