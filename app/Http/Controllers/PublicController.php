<?php

namespace App\Http\Controllers;

use App\Models\Fragrance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/FragranceList', [
            'fragrances' => Fragrance::latest()->get()
        ]);
    }

    public function show($id)
    {
        $fragrance = Fragrance::findOrFail($id);
        return Inertia::render('Public/FragranceDetail', [
            'fragrance' => $fragrance
        ]);
    }
}