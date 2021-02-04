<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\ApiResponse;
use Auth;

class ApiController extends Controller
{
    use ApiResponse;
    var $userId;

    public function __construct()
    {
        $auth = Auth::guard('sanctum');
        $this->userId = $auth ? $auth->id() : null;
    }
}
