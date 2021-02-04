<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends ApiRequest
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
            'pet_id' => ['required', 'exists:pets,id'],
            'quantity' => ['required', 'numeric', 'gt:0'],
            'ship_date' => ['required', 'after:tomorrow'],
            'stauts' => 'in:"placed","approved","delivered"'
        ];
    }
}
