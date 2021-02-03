<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class CheckApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!empty(trim($request->bearerToken()))) {
            if (User::where('id', Auth::guard('sanctum')->id())->exists()) {
                return $next($request);
            }
        }
        return response()->json(['message' => 'Invalid Token'], 401);
    }
}
