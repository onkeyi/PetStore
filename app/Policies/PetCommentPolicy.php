<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\PetComment;
use App\Models\User;

use Auth;

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

    public function delete(?User $user = null, PetComment $petComment)
    {
        return Auth::guard('sanctum')->id() === $petComment->user_id;
    }
}
