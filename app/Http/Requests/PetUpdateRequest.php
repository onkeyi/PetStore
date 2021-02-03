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
            'id' => ['required', 'numeric', 'exists:pets'],
            'name' => ['required', 'max:20'],
            'status' => ['required', 'in:"available", "pending", "sold" '],
            'tags' => 'required',
            // 'tags.*.id' => ['required', 'exists:tags'],
            'tags.*.name' => ['required', 'max:20', 'distinct'],
            'category' => 'required',
            'category.id' => ['required', 'numeric', 'exists:categories,id'],
            'category.name' => ['required', 'max:20'],
            'photoUrls' => 'array'
        ];
    }
}
