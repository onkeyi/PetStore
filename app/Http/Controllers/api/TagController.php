<?php

namespace App\Http\Controllers\api;

use App\Http\Requests\TagStoreRequest;
use App\Http\Requests\TagUpdateRequest;
use App\Models\Tag;

class TagController extends ApiController
{
    public function getAllTags()
    {
        return $this->successResponse(
            Tag::orderBy('id', 'desc')
                ->paginate(20)
        );
    }

    public function getTagById(Tag $tag)
    {
        return $this->successResponse($tag);
    }

    //
    public function addNewTag(TagStoreRequest $request)
    {
        $this->authorize('create');
        $validated = $request->validated();
        $tag = new Tag($validated);
        $id = $tag->save();
        return $this->successResponse(['id' => $id]);
    }

    public function updateTagById(TagUpdateRequest $request, Tag $tag)
    {
        $this->authorize('update');
        $validated = $request->validated();
        $tag->save($validated);
        return $this->successResponse(['id' => $tag->id]);
    }

    public function deleteTagById(Tag $tag)
    {
        $this->authorize('delete', $tag);
        $tag->delete();
        return $this->successResponse();
    }
}
