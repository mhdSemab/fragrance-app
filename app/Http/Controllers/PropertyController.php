<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $properties = Property::latest()->get();
        
        return Inertia::render('Properties/Index', [
            'properties' => $properties,
            'can' => [
                'create_property' => Auth::check() && (
                    Auth::user()->hasRole('admin') || 
                    Auth::user()->hasRole('agent')
                ),
                'edit_property' => Auth::check() && (
                    Auth::user()->hasRole('admin') || 
                    Auth::user()->hasRole('agent')
                ),
            ]
        ]);
    }

    public function create(Request $request)
    {
        if (!Auth::check() || 
            (!Auth::user()->hasRole('admin') && !Auth::user()->hasRole('agent'))) {
            return redirect()->route('login');
        }

        return Inertia::render('Properties/Create');
    }

    public function store(Request $request)
    {
        if (!Auth::check() || 
            (!Auth::user()->hasRole('admin') && !Auth::user()->hasRole('agent'))) {
            return redirect()->route('login');
        }

        $validatedData = $request->validate([
            'type' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'rooms' => 'required|integer|min:1',
            'listing_status' => 'required|string|in:available,pending,sold',
            'price' => 'required|numeric|min:0',
        ]);

        try {
            $validatedData['user_id'] = Auth::id();
            Property::create($validatedData);
            
            return redirect()->route('properties.index')
                ->with('success', 'Property added successfully');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'There was an issue saving the property. Please try again.');
        }
    }

    public function show(Property $property)
    {
        return Inertia::render('Properties/Show', [
            'property' => $property
        ]);
    }

    public function edit(Request $request, Property $property)
    {
        if (!Auth::check() || 
            (!Auth::user()->hasRole('admin') && !Auth::user()->hasRole('agent'))) {
            return redirect()->route('login');
        }

        // If user is an agent, they can only edit their own properties
        if (Auth::user()->hasRole('agent') && $property->user_id !== Auth::id()) {
            abort(403, 'You can only edit your own properties.');
        }

        return Inertia::render('Properties/Edit', [
            'property' => $property
        ]);
    }

    public function update(Request $request, Property $property)
    {
        if (!Auth::check() || 
            (!Auth::user()->hasRole('admin') && !Auth::user()->hasRole('agent'))) {
            return redirect()->route('login');
        }

        // If user is an agent, they can only update their own properties
        if (Auth::user()->hasRole('agent') && $property->user_id !== Auth::id()) {
            abort(403, 'You can only update your own properties.');
        }

        $validatedData = $request->validate([
            'type' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'rooms' => 'required|integer|min:1',
            'listing_status' => 'required|string|in:available,pending,sold',
            'price' => 'required|numeric|min:0',
        ]);

        try {
            $property->update($validatedData);
            
            return redirect()->route('properties.index')
                ->with('success', 'Property updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'There was an issue updating the property. Please try again.');
        }
    }

    public function destroy(Request $request, Property $property)
    {
        if (!Auth::check() || 
            (!Auth::user()->hasRole('admin') && !Auth::user()->hasRole('agent'))) {
            return redirect()->route('login');
        }

        // If user is an agent, they can only delete their own properties
        if (Auth::user()->hasRole('agent') && $property->user_id !== Auth::id()) {
            abort(403, 'You can only delete your own properties.');
        }

        try {
            $property->delete();
            return redirect()->route('properties.index')
                ->with('success', 'Property deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'There was an issue deleting the property. Please try again.');
        }
    }

    public function about()
    {
        return Inertia::render('Properties/About');
    }
}