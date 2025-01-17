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
// Auth protected routes
Route::middleware(['auth'])->group(function () {
    // Basic routes
    Route::get('/fragrances', [FragranceController::class, 'index'])->name('fragrances.index');
    
    // Admin and Seller routes - These need to come BEFORE the show route
    Route::middleware(['role:admin,seller'])->group(function () {
        Route::get('/fragrances/create', [FragranceController::class, 'create'])->name('fragrances.create');
        Route::post('/fragrances', [FragranceController::class, 'store'])->name('fragrances.store');
    });

    // Show route must come after /create to avoid conflicts
    Route::get('/fragrances/{fragrance}', [FragranceController::class, 'show'])->name('fragrances.show');
    Route::get('/fragrances/{fragrance}/edit', [FragranceController::class, 'edit'])->name('fragrances.edit');
    Route::patch('/fragrances/{fragrance}', [FragranceController::class, 'update'])->name('fragrances.update');
    Route::delete('/fragrances/{fragrance}', [FragranceController::class, 'destroy'])->name('fragrances.destroy');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
