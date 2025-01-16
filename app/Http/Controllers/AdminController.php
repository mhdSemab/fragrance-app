<?php

namespace App\Http\Controllers;

use App\Models\Fragrance;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $fragrancesCount = Fragrance::count();
        $sellersCount = User::whereHas('roles', function($query) {
            $query->where('name', 'seller');
        })->count();

        return Inertia::render('Admin/Dashboard', [
            'fragrancesCount' => $fragrancesCount,
            'sellersCount' => $sellersCount
        ]);
    }

    public function fragrances()
    {
        $fragrances = Fragrance::with('user')->latest()->get();

        return Inertia::render('Admin/FragranceManagement', [
            'fragrances' => $fragrances
        ]);
    }
}