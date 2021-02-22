<?php

namespace App\Http\Middleware;

use App\Exceptions\ApiKeyNotfoundException;
use Closure;
use Illuminate\Http\Request;

class AuthenticateApiKey
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
        $apiKeyValue = $request->header('API-KEY');

        if (!isset($apiKeyValue) || env('MIX_API_KEY') !== $apiKeyValue) {
            throw new ApiKeyNotfoundException();
        }
        return $next($request);
    }
}