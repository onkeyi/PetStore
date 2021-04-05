<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Storage;
use App\Exceptions\ParameterNotfoundException;
use App\Exceptions\InvalideTokenException;
use App\Models\User;
use App\Http\Requests\UserUpdateRequest;
use App\Models\Pet;
use App\Models\Order;
use App\Models\UserFavorite;
use App\Http\Requests\FavoriteStoreRequest;
use App\Http\Requests\UserUploadImageRequest;

class UserController extends ApiController
{
    public function findUserByName()
    {
        $query = Request::all();
        if (!isset($query) || empty($query['username'])) {
            throw new ParameterNotfoundException;
        }

        return $this->successResponse(User::where('name', $query['username'])->get());
    }

    public function getUser() {
        if (!isset($this->userId)) {
            throw new InvalideTokenException;
        }
        return $this->successResponse(
            User::where('id',$this->userId)->first()
        );

    }

    public function getUserPets() {
        return $this->successResponse(
            Pet::where('user_id',$this->userId)
                    ->with(['tags', 'category', 'photoUrls','comments','order'])
                    ->paginate(env('APP_PER_PAGE',18))
        );
    }

    public function getUserOrders() {
        return $this->successResponse(
            Order::where('user_id',$this->userId)
                    ->with(['user','pet'])
                    ->paginate(env('APP_PER_PAGE',18))
        );
    }

    public function addNewUserFavorite(FavoriteStoreRequest $request) {
        $validated = $request->validated();
        $data = array('pet_id' => $validated['pet_id'],'user_id'=>$this->userId);
        return $this->successResponse(
            UserFavorite::updateOrCreate($data)
        );
    }

    public function deleteUserFavoriteByPetId($petId) {

        return $this->okResponse(
            UserFavorite::where(array('pet_id'=>$petId,'user_id'=>$this->userId))->delete()
        );
    }

    public function getUserFavorites() {
        $petIds = UserFavorite::where('user_id',$this->userId)->pluck('pet_id');

        if (!isset($petIds) || count($petIds) === 0) {
            return $this->successResponse();
        }
        return $this->successResponse(
            Pet::whereIn('id',$petIds)->with('photoUrls','category','tags')->paginate(env('APP_PER_PAGE',18))
        );
    }

    public function updateUser(UserUpdateRequest $request)
    {
        $validated = $request->validated();
        $user = User::where('id',$this->userId)->first();
        $user->status = $validated['status'];
        return $this->okResponse($user->save());
    }

    /**
     * Admin
     */
    public function updateUserById(UserUpdateRequest $request, User $user)
    {
        $this->authorize('update', $user);
        $validated = $request->validated();
        return $this->okResponse($user->update($validated));
    }

    public function deleteUser()
    {
        return $this->okResponse(User::where('id',$this->userId)->delete());
    }

    public function deleteUserById(User $user)
    {
        $this->authorize('delete', $user);
        return $this->okResponse($user->delete());
    }

    /**
     * Uploads an image.
     *
     */
    public function uploadAvatarImage(UserUploadImageRequest $request)
    {
        $uploadImg = $request->file('image');
        $user = User::where('id',$this->userId)->first();
        if ($uploadImg->isValid()) {
            $imageUploadPath = $uploadImg->store('tmp', 'public');
            // original avatar
            if ($user->avatar) {
                if (Storage::disk('public')->exists('users/' . $user->avatar)) {
                    Storage::disk('public')->move('users/' . $user->avatar, 'tmp/' . $user->avatar);
                }
            }
            $user->avatar =  basename($imageUploadPath);
            // new avatar
            if (Storage::disk('public')->exists('tmp/' . $user->avatar)) {
                Storage::disk('public')->move('tmp/' . $user->avatar, 'users/' . $user->avatar);
            }

            $user->save();
            return $this->successResponse([
                'file_name' =>  basename($imageUploadPath),
            ]);
        }
        // origina avatar.
        if ($user->avatar) {
            if (Storage::disk('public')->exists('tmp/' . $user->avatar)) {
                Storage::disk('public')->move('tmp/' . $user->avatar, 'users/' . $user->avatar);
            }
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Upload image file failed',
        ], 400);
    }
}
