<?php

namespace App\Policies;

use App\Models\Property;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PropertyPolicy
{
    public function viewAny(User $user): bool
    {
        // Anyone can view properties
        return true;
    }

    public function view(User $user, Property $property): bool
    {
        // Anyone can view individual properties
        return true;
    }

    public function create(User $user): bool
    {
        // Only admins and agents can create properties
        return $user->hasRole('admin') || $user->hasRole('agent');
    }

    public function update(User $user, Property $property): bool
    {
        // Admins can update any property
        if ($user->hasRole('admin')) {
            return true;
        }

        // Agents can only update their own properties
        if ($user->hasRole('agent')) {
            return $property->user_id === $user->id;
        }

        return false;
    }

    public function delete(User $user, Property $property): bool
    {
        // Admins can delete any property
        if ($user->hasRole('admin')) {
            return true;
        }

        // Agents can only delete their own properties
        if ($user->hasRole('agent')) {
            return $property->user_id === $user->id;
        }

        return false;
    }
}