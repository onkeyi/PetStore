<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Throwable;
use App\Exceptions\ApiKeyNotfoundException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        return $this->handler($request, $exception);
    }

    public function handler($request, Throwable $exception)
    {

        if ($exception instanceof ApiKeyNotfoundException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Authentication API-KEY error.',
                    'code' => 401
                ],
                401
            );
        }

        if ($exception instanceof InvalideTokenException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Invalid token',
                    'code' => 401
                ],
                401
            );
        }

        if ($exception instanceof ValidationException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Validation error',
                    'code' => 400
                ],
                400
            );
        }

        if ($exception instanceof ParameterNotfoundException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Parameter Not found',
                    'code' => 400
                ],
                400
            );
        }

        if ($exception instanceof AuthorizationException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'This action is unauthorized. ',
                    'code' => 405
                ],
                403
            );
        }

        if ($exception instanceof PermissionException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'This action is unauthorized. ',
                    'code' => 403
                ],
                403
            );
        }

        if ($exception instanceof MethodNotAllowedHttpException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'The specified method for the request is invalid',
                    'code' => 405
                ],
                405
            );
        }

        if ($exception instanceof ModelNotFoundException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Not Found',
                    'code' => 404
                ],
                404
            );
        }

        if ($exception instanceof HttpException) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => $exception->getMessage(),
                    'code' => $exception->getStatusCode() ? $exception->getStatusCode() : -1
                ],403
            );
        }
        if (null !== $exception) {
            if ($exception->getCode() === 0) {
                return response()->json(
                    [
                        'status' => 'error',
                        'message' => 'Internal Server error' . $exception->getMessage(),
                        'code' => 500
                    ],500
                );
            }
        }

        return response()->json(
            [
                'status' => 'error',
                'message' => 'unexpected error' . $exception->getMessage(),
                'code' => $exception->getCode()
            ]
        );
    }
}
