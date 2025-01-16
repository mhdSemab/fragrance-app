<?php
namespace App\Providers;

use App\Models\Fragrance;
use App\Policies\FragrancePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Fragrance::class => FragrancePolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();

        // Define gates for roles using your single role implementation
        Gate::define('admin', function ($user) {
            return $user->role === 'admin';
        });

        Gate::define('seller', function ($user) {
            return $user->role === 'seller';
        });

        Gate::define('manage-fragrances', function ($user) {
            return in_array($user->role, ['admin', 'seller']);
        });
    }
}