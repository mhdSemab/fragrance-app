<?php

namespace App\Http\Controllers;

use App\Models\Fragrance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class FragranceController extends Controller
{
   private function canManageFragrances(): bool
   {
       /** @var User */
       $user = Auth::user();
       return $user->hasAnyRole(['admin', 'seller']);
   }

   public function index()
   {
       $fragrances = Fragrance::latest()->get();

       return Inertia::render('Fragrances/Index', [
           'fragrances' => $fragrances,
           'canManage' => $this->canManageFragrances(),
           'auth' => [
            'user' => Auth::user(),
           ],
       ]);
   }

   public function show(Fragrance $fragrance)
   {
       return Inertia::render('Fragrances/Show', [
           'fragrance' => $fragrance
       ]);
   }

   public function create()
   {
       if (!$this->canManageFragrances()) {
           abort(403);
       }

       return Inertia::render('Fragrances/Create');
   }

   public function store(Request $request)
   {
       if (!$this->canManageFragrances()) {
           abort(403);
       }
   
       $validatedData = $request->validate([
           'name' => 'required|string|max:255',
           'brand' => 'required|string|max:255',
           'scent_type' => 'required|string|max:255',
           'description' => 'required|string',
           'price' => 'required|numeric|min:0',
       ]);
   
       // Add user_id to the array after validation
       $validatedData['user_id'] = Auth::id();
       
       // Remove the dd() and store the data
       $fragrance = Fragrance::create($validatedData);
   
       return redirect()->route('fragrances.index')
           ->with('success', 'Fragrance created successfully.');
   }

   public function edit(Fragrance $fragrance)
   {
       /** @var User */
       $user = Auth::user();
       
       if (!($user->role === 'admin') && 
           !($user->role === 'seller' && $fragrance->user_id === Auth::id())) {
           abort(403);
       }

       return Inertia::render('Fragrances/Edit', [
           'fragrance' => $fragrance
       ]);
   }

   public function update(Request $request, Fragrance $fragrance)
   {
       /** @var User */
       $user = Auth::user();
       
       if (!($user->role === 'admin') && 
           !($user->role === 'seller' && $fragrance->user_id === Auth::id())) {
           abort(403);
       }

       $validatedData = $request->validate([
           'name' => 'required|string|max:255',
           'brand' => 'required|string|max:255',
           'scent_type' => 'required|string|max:255',
           'description' => 'required|string',
           'price' => 'required|numeric|min:0',
       ]);

       $fragrance->update($validatedData);

       return redirect()->route('fragrances.index')
           ->with('success', 'Fragrance updated successfully.');
   }

   public function destroy(Fragrance $fragrance)
   {
       /** @var User */
       $user = Auth::user();
       
       if (!($user->role === 'admin') && 
           !($user->role === 'seller' && $fragrance->user_id === Auth::id())) {
           abort(403);
       }

       $fragrance->delete();

       return redirect()->route('fragrances.index')
           ->with('success', 'Fragrance deleted successfully.');
   }
}