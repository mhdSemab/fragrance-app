<?php
namespace App\Providers;

use App\Models\Property;
use App\Policies\PropertyPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        // Model::class => ModelPolicy::class,
        Property::class => PropertyPolicy::class,
    ];

    public function boot()
    {
        $this->registerPolicies();

        // Define gates for roles
        Gate::define('admin', function ($user) {
            return $user->hasRole('admin');
        });

        Gate::define('user', function ($user) {
            return $user->hasRole('user');
        });
    }
}
