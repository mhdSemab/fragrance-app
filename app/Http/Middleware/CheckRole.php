<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle($request, Closure $next, ...$roles)
    {
        if (!$request->user()) {
            abort(403, 'Unauthorized action.');
        }

        foreach($roles as $role) {
            if($request->user()->hasRole($role)) {
                return $next($request);
            }
        }

        abort(403, 'Unauthorized action.');
    }
}