<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserEvalutionStoreRequest extends FormRequest
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
            'evalution' => ['required', 'in:"good","normal","bad"'],
            'comment' => ['max:255'],
            'order_id' => ['required','unique:user_evalutions']
        ];
    }
}
