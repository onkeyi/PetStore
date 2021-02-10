<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TagStoreRequest;
use App\Http\Requests\TagUpdateRequest;

class TagController extends Controller
{
    public function getAllTags()
    {
        $tag = new Tag;
        return $tag->all();
    }

    //
    public function addNewTag(TagStoreRequest $request)
    {
    }

    public function updateTagById(TagUpdateRequest $request, Tag $tag)
    {
    }

    public function deleteTagById(Tag $tag)
    {
    }
}