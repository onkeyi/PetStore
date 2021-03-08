<?php

namespace App\Http\Controllers\api;

use App\Exceptions\ParameterNotfoundException;
use App\Models\User;
use App\Http\Requests\UserUpdateRequest;
use App\Models\Pet;
use App\Models\Order;
use App\Models\UserFavorite;
use App\Http\Requests\FavoriteStoreRequest;

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

        return $this->successResponse(
            User::where('id',$this->userId)->first()
        );

    }

    public function getUserPets() {
        return $this->successResponse(
            Pet::where('user_id',$this->userId)->with(['tags', 'category', 'photoUrls','comments','order'])->get()
        );
    }

    public function getUserOrders() {
        return $this->successResponse(
            Order::where('user_id',$this->userId)->with(['user','pet'])->get()
        );
    }

    public function addNewUserFavorite(FavoriteStoreRequest $request) {
        $validated = $request->validated();
        $data = array('pet_id' => $validated['pet_id'],'user_id'=>$this->userId);
        return $this->successResponse(
            UserFavorite::updateOrCreate($data)
        );
    }

    public function deleteUserFavorite($favoriteId) {
        return $this->successResponse(
            UserFavorite::where(array('id'=>$favoriteId,'user_id'=>$this->userId))->delete()
        );
    }

    public function getUserFavorites() {
        $petIds = UserFavorite::where('user_id',$this->userId)->pluck('pet_id');

        if (!isset($petIds) || count($petIds) === 0) {
            return $this->successResponse([]);
        }
        return $this->successResponse(
            Pet::whereIn('id',$petIds)->with('photoUrls','category','tags')->get()
        );
    }

    public function updateUser(UserUpdateRequest $request)
    {
        $validated = $request->validated();
        User::where('id',$this->userId)->update($validated);
        return $this->successResponse(['id' => $this->userId]);
    }

    public function updateUserById(UserUpdateRequest $request, User $user)
    {
        $this->authorize('update', $user);
        $validated = $request->validated();
        $user->update($validated);
        return $this->successResponse(['id' => $user->id]);
    }

    public function deleteUser()
    {
        User::where('id',$this->userId)->delete();
        return $this->successResponse('');
    }

    public function deleteUserById(User $user)
    {
        $this->authorize('delete', $user);
        $user->delete();
        return $this->successResponse('');
    }

}
