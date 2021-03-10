<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
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
    public function create(?User $user)
    {
        return Auth::guard('sanctum')->is_admin();
    }

    public function update(?User $user)
    {
        return Auth::guard('sanctum')->is_admin();
    }

    public function delete(?User $user)
    {
        return Auth::guard('sanctum')->is_admin();
    }
}
