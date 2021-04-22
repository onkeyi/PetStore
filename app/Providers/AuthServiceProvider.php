<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \App\Models\User::class => \App\Policies\UserPolicy::class,
        \App\Models\Category::class => \App\Policies\CategoryPolicy::class,
        \App\Models\Tag::class => \App\Policies\TagPolicy::class,
        \App\Models\Pet::class => \App\Policies\PetPolicy::class,
        \App\Models\PetComment::class => \App\Policies\PetCommentPolicy::class,
        \App\Models\Order::class => \App\Policies\OrderPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
    }
}
