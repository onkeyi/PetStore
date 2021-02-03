<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Exceptions\ApiResponseException;

abstract class ApiRequest extends FormRequest
{
    protected function failedValidation(Validator $validator): void
    {
        $data = [
            'status' => 'error',
            'message' => $validator->errors(),
        ];

        throw new ApiResponseException(response()->json($data, 405));
    }
}
