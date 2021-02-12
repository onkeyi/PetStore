<?php

namespace App\Http\Controllers\api;

use App\Exceptions\ParameterNotfoundException;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Pet;
use App\Models\PetCategory;
use App\Models\PetPhotoUrl;
use App\Models\PetTag;
use App\Models\Tag;
use App\Http\Requests\PetStoreRequest;
use App\Http\Requests\PetUpdateRequest;
use App\Http\Requests\PetUploadImageRequest;

/**
 * Everything abou you pets.
 */
class PetController extends ApiController
{

    public function getAllPets()
    {
        return $this->successResponse(
            Pet::with(['tags', 'category', 'photoUrls'])
                ->orderBy('created_at', 'desc')
                ->paginate($this->maxPage)
        );
    }

    /**
     * Add a new pet to store.
     *
     * @param  \App\Http\Requests\PetStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function addNewPet(PetStoreRequest $request)
    {
        $validated = $request->validated();
        $pet = new Pet($validated);
        $pet->user_id = $this->userId;
        $pet->category_id = $validated['category']['id'];

        $validated['id'] = DB::transaction(
            function () use ($pet, $validated) {
                $pet->save();

                $tags = $validated['tags'];
                // 1:n
                foreach ($tags as $tag) {
                    $pet->tags()->create(['tag_id' => $tag['id'], 'pet_id' => $pet->id]);
                }
                return $pet->id;
            }
        );
        return $this->successResponse($validated);
    }

    /**
     * Find Pet by id.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function getPetById(Pet $pet)
    {
        return $this->successResponse(
            $pet->load(['tags', 'photoUrls', 'category', 'owner'])
        );
    }

    /**
     * Updates a pet in the store with from data.
     *
     * @param  \App\Requests\PetUpdateRequest  $request
     * @param  \App\Models\Pet $pet
     * @return \Illuminate\Http\Response
     */
    public function updatePetById(PetUpdateRequest $request, Pet $pet)
    {
        if (!isset($pet)) {
            throw new ParameterNotfoundException;
        }

        $validated = $request->validated();
        // pet policy.
        $this->authorize('update', $pet);
        DB::transaction(
            function () use ($validated, $pet) {
                $pet->name = $validated['name'];
                $pet->save();

                PetTag::where('pet_id', $pet->id)->delete();
                $tags = $validated['tags'];
                foreach ($tags as $tag) {
                    PetTag::create(['tag_id' => $tag['id'], 'pet_id' => $pet->id]);
                }
            }
        );

        return $this->successMessage(['id' => $pet->id]);
    }

    /**
     * Deletes a pet.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePetById(Pet $pet)
    {
        $this->authorize('destroy', $pet);

        DB::transaction(
            function () use ($pet) {
                $pet->delete();
                PetTag::where('pet_id', $pet->id)->delete();
                PetCategory::where('pet_id', $pet->id)->delete();
                $petPhotoUrls = PetPhotoUrl::where('pet_id', $pet->id)->pluck('photo_urls');

                // TODO::
                // delete file
                foreach ($petPhotoUrls as $petPhotUrl) {
                }

                PetPhotoUrl::where('pet_id', $pet->id)->delete();
            }
        );

        return $this->successMessage();
    }

    /**
     * Finds pets by status.
     *
     * @return \Illuminate\Http\Response
     */
    public function findByStatus()
    {

        $query = Request::all();

        if (isset($query) || !isset($query['status']) || !is_array($query['status'])) {
            throw new ParameterNotfoundException;
        }
        return Pet::whereIn('status', $query['status'])
            ->with(['tags', 'category', 'photoUrls','owner'])
            ->paginate($this->maxPage)->appends(request()->query());
    }

    /**
     * Finds pets by tags.
     *
     * @return \Illuminate\Http\Response
     */
    public function findByTags()
    {
        $qeury = Request::all();

        if (!isset($query) || !isset($qeury['tag']) || !is_array($qeury['tag'])) {
            throw new ParameterNotfoundException;
        }

        $tagIds = Tag::whereIn('name', $qeury['tag'])->pluck('id');

        $result =  Pet::with(['tags', 'photoUrls', 'category', 'owner'])
            ->whereHas(
                'tags',
                function ($query) use ($tagIds) {
                    $query->whereIn('tag_id', $tagIds);
                }
            )->paginate($this->maxPage)->appends(request()->query());
        return $this->successResponse($result);
    }

    public function findByCategory()
    {
        $queryParam = Request::all();

        if (!isset($queryParam) || !isset($queryParam['category'])) {
            throw new ParameterNotfoundException;
        }
        return Pet::whereIn('category_id', function ($query) use ($queryParam) {
            $query->select('id')
                ->from('categories')
                ->where('name', trim($queryParam['category']));
        })->with(['tags', 'category', 'photoUrls','owner'])
            ->paginate($this->maxPage)->appends(request()->query());
    }

    /**
     * Uploads an image.
     *
     */
    public function uploadImage(PetUploadImageRequest $request)
    {
        $uploadFolder = 'pets';
        $uploadImg = $request->file('image');
        if ($uploadImg->isValid()) {

            $imageUploadPath = $uploadImg->store($uploadFolder, 'storage');
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid Image file',
            ], 400);
        }

        return response()->json([
            'file_name' => $imageUploadPath,
        ], 200);
    }
}