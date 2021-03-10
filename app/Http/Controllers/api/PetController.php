<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use App\Exceptions\ParameterNotfoundException;
use App\Models\Pet;
use App\Models\PetPhotoUrl;
use App\Models\PetTag;
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
        $query = Request::all();
        $order = ['status','created_at'];
        $orderBy = ($query
                    && isset($query['order'])
                    && in_array($query['order'],$order)) ? $query['order'] : 'created_at';
        $sorted = ($query && isset($query['sorted'])) ? $query['sorted'] : 'desc';

        return $this->successResponse(
            Pet::with(['tags', 'category', 'photoUrls','owner','comments'])
                ->orderBy($orderBy, $sorted)
                ->paginate(env('APP_PER_PAGE',18))
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
        $pet->status = 'available';
        // $pet->category_id = $validated['category']['id'];

        $pet = DB::transaction(
            function () use ($pet, $validated) {
                $pet->save();
                $tags = $validated['tags'];
                // 1:n
                foreach ($tags as $tag) {
                    $pet->tags()->updateOrCreate(['tag_name' => $tag, 'pet_id' => $pet->id]);
                }
                $petPhotoUrls = $validated['photo_urls'];
                if (isset($petPhotoUrls) && count($petPhotoUrls) > 0) {
                    foreach ($petPhotoUrls as $photo) {
                        // move file from tmp -> pets
                        if (Storage::disk('public')->exists('tmp/' . $photo)) {
                            Storage::disk('public')->move('tmp/' . $photo, 'pets/' . $photo);
                        }
                        $pet->photoUrls()->create(['pet_id' => $pet->id, 'photo_url' => $photo]);
                    }
                }
                return $pet;
            }
        );
        return $this->successResponse($pet);
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
            $pet->load(['tags', 'photoUrls', 'category', 'owner','comments'])
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
                    PetTag::create(['tag_name' => $tag, 'pet_id' => $pet->id]);
                }
                $pet->photoUrls()->delete();
                $petPhotoUrls = $validated['photoUrls'];
                if (isset($petPhotoUrls) && count($petPhotoUrls) > 0) {
                    foreach ($petPhotoUrls as $photo) {
                        // move file from tmp -> pets
                        if (Storage::disk('public')->exists('tmp/' . $photo)) {
                            Storage::disk('public')->move('tmp/' . $photo, 'pets/' . $photo);
                        }
                        $pet->photoUrls()->create(['pet_id' => $pet->id, 'photo_url' => $photo]);
                    }
                }
            }
        );

        return $this->okResponse();
    }

    /**
     * Deletes a pet.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePetById(Pet $pet)
    {

        $this->authorize('deletePetById',$pet);

        DB::transaction(
            function () use ($pet) {
                $pet->delete();
                PetTag::where('pet_id', $pet->id)->delete();
                $petPhotoUrls = PetPhotoUrl::where('pet_id', $pet->id)->pluck('photo_url');
                // delete file
                foreach ($petPhotoUrls as $photo) {
                    if (Storage::disk('public')->exists('pets/' . $photo)) {
                        Storage::disk('public')->delete('pets/' . $photo);
                    }
                }

                PetPhotoUrl::where('pet_id', $pet->id)->delete();
            }
        );

        return $this->okResponse();
    }

    /**
     * Finds pets by status.
     *
     * @return \Illuminate\Http\Response
     */
    public function findByStatus()
    {

        $query = Request::all();

        if (!isset($query) || !isset($query['status']) || !is_array($query['status'])) {
            throw new ParameterNotfoundException;
        }
        return Pet::whereIn('status', $query['status'])
            ->with(['tags', 'category', 'photoUrls', 'owner','comments'])
            ->paginate(env('APP_PER_PAGE',18))->appends(request()->query());
    }

    /**
     * Finds pets by tags.
     *
     * @return \Illuminate\Http\Response
     */
    public function findByTags()
    {
        $qeury = Request::all();

        if (!isset($qeury) || !isset($qeury['tag'])) {
            throw new ParameterNotfoundException;
        }
        $tags = explode(',',$qeury['tag']);

        if ($tags && count($tags) > 0) {
            $result =  Pet::with(['tags', 'photoUrls', 'category', 'owner','comments'])
                ->whereHas(
                    'tags',
                    function ($query) use ($tags) {
                        $query->whereIn('tag_name', $tags);
                    }
                )->paginate(env('APP_PER_PAGE',18))->appends(request()->query());
            return $this->successResponse($result);
        }
        return $this->successResponse();
    }

    public function findByCategory()
    {
        $queryParam = Request::all();

        if (!isset($queryParam) || !isset($queryParam['category'])) {
            throw new ParameterNotfoundException;
        }
        return Pet::where('category_id', $queryParam['category'])
             ->with(['tags', 'category', 'photoUrls', 'owner','comments'])
            ->paginate(env('APP_PER_PAGE',18))->appends(request()->query());
    }

    /**
     * Uploads an image.
     *
     */
    public function uploadImage(PetUploadImageRequest $request)
    {
        $uploadImg = $request->file('image');

        if ($uploadImg->isValid()) {
            $imageUploadPath = $uploadImg->store('tmp', 'public');

            return $this->successResponse([
                'file_name' =>  basename($imageUploadPath),
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Upload image file failed',
        ], 400);
    }
}
