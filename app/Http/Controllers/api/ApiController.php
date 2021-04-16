<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\ApiResponse;
use Auth;
use App\Models\User;

class ApiController extends Controller
{
    use ApiResponse;
    public $userId;

    public function __construct()
    {
        $auth = Auth::guard('sanctum');
        $this->userId = $auth ? $auth->id() : null;
    }
}
