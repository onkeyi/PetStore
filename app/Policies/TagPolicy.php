<?php

namespace App\Policies;

use App\Models\Tag;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
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

    public function update(?Tag $tag)
    {
        return Auth::guard('sanctum')->is_admin();
    }

    public function delete(?Tag $tag)
    {
        return Auth::guard('sanctum')->is_admin();
    }
}
