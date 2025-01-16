<?php

namespace App\Policies;

use App\Models\Fragrance;
use App\Models\User;

class FragrancePolicy
{
    public function viewAny(User $user): bool
    {
        // Anyone can view fragrances
        return true;
    }

    public function view(User $user, Fragrance $fragrance): bool
    {
        // Anyone can view individual fragrances
        return true;
    }

    public function create(User $user): bool
    {
        // Only admins and sellers can create fragrances
        return $user->hasRole('admin') || $user->hasRole('seller');
    }

    public function update(User $user, Fragrance $fragrance): bool
    {
        // Admins can update any fragrance
        if ($user->hasRole('admin')) {
            return true;
        }

        // Sellers can only update their own fragrances
        if ($user->hasRole('seller')) {
            return $fragrance->user_id === $user->id;
        }

        return false;
    }

    public function delete(User $user, Fragrance $fragrance): bool
    {
        // Admins can delete any fragrance
        if ($user->hasRole('admin')) {
            return true;
        }

        // Sellers can only delete their own fragrances
        if ($user->hasRole('seller')) {
            return $fragrance->user_id === $user->id;
        }

        return false;
    }
}
