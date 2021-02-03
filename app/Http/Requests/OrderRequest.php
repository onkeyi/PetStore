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
            'pet_id' => ['require', 'exists:pets,id'],
            'quantity' => ['require', 'numeric'],
            'shop_date' => 'require',
            'stauts' => 'in:"placed","approved","delivered"'
        ];
    }
}
