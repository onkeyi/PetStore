<?php

namespace App\Models;


trait ApiResponse
{

    public function successResponse($data = null, $code = 200)
    {

        return response()->json($data ? $data : new \stdClass(), $code);
    }

    public function failedResponse($message = '', $code = 400)
    {
        return response()->json(['status' => 'error', 'message' => $message], $code);
    }
}
