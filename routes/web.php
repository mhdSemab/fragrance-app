<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FragranceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Static About page route
Route::get('/about', function () {
    return Inertia::render('Fragrances/About');
})->name('about');

// Fragrance routes
Route::get('/fragrances', [FragranceController::class, 'index'])->name('fragrances.index');

// Protected fragrance routes that require authentication and specific roles
Route::middleware(['auth', 'role:admin,seller'])->group(function () {
    Route::resource('fragrances', FragranceController::class)
        ->except(['index', 'show'])
        ->names([
            'create' => 'fragrances.create',
            'store' => 'fragrances.store',
            'edit' => 'fragrances.edit',
            'update' => 'fragrances.update',
            'destroy' => 'fragrances.destroy',
        ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
