<?php

namespace App\Models;

trait ApiResponse
{
    public function okResponse($okCount = 1)
    {
        return response()->json(['ok'=>$okCount > 0 ? true : false]);
    }

    public function successResponse($data = null, $code = 200)
    {
        return response()->json(isset($data) ? $data : [], $code);
    }

    public function failedResponse($message = '', $code = 400)
    {
        return response()->json(['status' => 'error', 'message' => $message], $code);
    }
}
