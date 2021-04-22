<?php

namespace App\Http\Requests;

class PetUpdateRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => ['required', 'numeric'],
            'name' => ['required', 'max:100'],
            'status' => ['required', 'in:"available", "pending", "sold" '],
            'tags' => 'required',
            'category_id' => ['required', 'numeric', 'exists:categories,id'],
            'photo_urls' => ['required', 'array']
        ];
    }
}
