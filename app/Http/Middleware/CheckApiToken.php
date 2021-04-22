<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure;
use App\Models\User;
use App\Exceptions\InvalideTokenException;

use Auth;

class CheckApiToken extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$guards)
    {
        if (!empty(trim($request->bearerToken()))) {
            if (User::where('id', Auth::guard('sanctum')->id())->exists()) {
                return $next($request);
            }
        }
        throw new InvalideTokenException();
    }
}
