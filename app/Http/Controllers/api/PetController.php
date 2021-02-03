<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Pet;
use App\Models\PetCategory;
use App\Models\PetPhotoUrl;
use App\Models\PetTag;
use App\Http\Requests\PetStoreRequest;
use App\Http\Requests\PetUpdateRequest;
use App\Http\Requests\PetUploadImageRequest;
use Auth;

/**
 * Everything abou you pets.
 */
class PetController extends ApiController
{

    public function index()
    {
        return $this->successResponse(
            Pet::with(['tags', 'category', 'photoUrls'])
                ->orderBy('created_at', 'desc')
                ->paginate(5)
        );
    }

    /**
     * Add a new pet to store.
     *
     * @param  \App\Http\Requests\PetStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PetStoreRequest $request)
    {
        $validated = $request->validated();
        $pet = new Pet($validated);
        $pet->user_id = Auth::guard('sanctum')->id();
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
    public function show(Pet $pet)
    {
        return $this->successResponse(
            $pet->load(['tags', 'photoUrls', 'category'])
        );
    }

    /**
     * Updates a pet in the store with from data.
     *
     * @param  \App\Requests\PetUpdateRequest  $request
     * @param  \App\Models\Pet $pet
     * @return \Illuminate\Http\Response
     */
    public function update(PetUpdateRequest $request, Pet $pet)
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
                    PetTag::create(['tag_id' => $tag['id'], 'pet_id' => $pet->id]);
                }
            }
        );

        return $this->successMessage('Pet Updated');
    }

    /**
     * Deletes a pet.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        $this->authorize('update', $pet);

        DB::transaction(
            function () use ($pet) {
                $pet->delete();
                PetTag::where('pet_id', $pet->id)->delete();
                PetCategory::where('pet_id', $pet->id)->delete();
                $petPhotoUrls = PetPhotoUrl::where('pet_id', $pet->id)->get();

                // TODO::
                // delete file
                foreach ($petPhotoUrls as $petPhotUrl) {
                }

                PetPhotoUrl::where('pet_id', $pet->id)->delete();
            }
        );

        return $this->successMessage('Pet Deleted');
    }

    /**
     * Finds pets by status.
     *
     * @return \Illuminate\Http\Response
     */
    public function findByStatus()
    {
        $input = Request::all();

        if (!isset($input['status']) || !is_array($input['status'])) {
            return $this->failedResponse('Invalid status supplied', 400);
        }
        return Pet::whereIn('status', $input['status'])
            ->with(['tags', 'category', 'photoUrls'])
            ->paginate(5);
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
