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
    public function create()
    {
        return Auth::guard('sanctum')->is_admin();
    }

    public function update()
    {
        return Auth::guard('sanctum')->is_admin();
    }

    public function delete()
    {
        return Auth::guard('sanctum')->is_admin();
    }
}
