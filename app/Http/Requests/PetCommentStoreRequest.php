<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PetCommentStoreRequest extends FormRequest
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
            'pet_id' => ['required','exists:pets,id'],
            'comment' => ['required', 'max:255']
        ];
    }
}
