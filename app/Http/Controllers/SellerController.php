<?php

namespace App\Http\Controllers;

use App\Models\Fragrance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller
{
    public function dashboard()
    {
        $fragrances = Fragrance::where('user_id', Auth::id())
            ->latest()
            ->get();

        return Inertia::render('Seller/Dashboard', [
            'fragrances' => $fragrances
        ]);
    }

    public function fragrances()
    {
        $fragrances = Fragrance::where('user_id', Auth::id())
            ->latest()
            ->get();

        return Inertia::render('Seller/FragranceList', [
            'fragrances' => $fragrances
        ]);
    }
}