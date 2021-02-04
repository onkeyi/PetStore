<?php

namespace App\Http\Requests;

use Auth;

class PetStoreRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::guard('sanctum')->user()->tokenCan('server:update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:20'],
            'status' => ['required', 'in:"available", "pending", "sold" '],
            'tags' => 'required',
            'tags.*.name' => ['required', 'max:10', 'distinct'],
            'category' => 'required',
            'category.name' => ['required', 'max:20'],
            'photoUrls' => 'array' // add new pet after upload image.
        ];
    }
}
