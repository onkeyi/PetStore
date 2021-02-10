<?php

namespace App\Models;


trait ApiResponse
{
    public function successMessage($message = '', $code = 200)
    {
        return response()->json(['message' => $message], $code);
    }

    public function successResponse($data = '', $code = 200)
    {
        return response()->json($data, $code);
    }

    public function failedResponse($message = '', $code = 400)
    {
        return response()->json(['status' => 'error', 'message' => $message], $code);
    }
}