<?php

namespace App\Policies;

use App\Models\PetComment;
use Illuminate\Auth\Access\HandlesAuthorization;

class PetCommentPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function destroy(PetComment $petComment)
    {
        return Auth::guard('sanctum')->id() === $petComment->user_id;
    }
}
