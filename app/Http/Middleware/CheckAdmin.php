<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

class CheckAdmin
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
            if (Admin::where('id', Auth::guard('sanctum')->id())->exists()) {
                return $next($request);
            }
        }
        throw new AuthorizationException();
    }
}
