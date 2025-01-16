<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fragrance;
use App\Models\User;

class FragranceSeeder extends Seeder
{
    public function run(): void
    {
        // Get seller user
        $seller = User::whereHas('roles', function($query) {
            $query->where('name', 'seller');
        })->first();

        $fragrances = [
            [
                'name' => 'Bleu de Chanel',
                'brand' => 'Chanel',
                'scent_type' => 'Woody Aromatic',
                'description' => 'A fresh, clean scent with citrus and wood notes.',
                'price' => 99.99,
                'user_id' => $seller->id
            ],
            [
                'name' => 'Sauvage',
                'brand' => 'Dior',
                'scent_type' => 'Fresh Spicy',
                'description' => 'A radiant fragrance with citrus top notes and woody undertones.',
                'price' => 89.99,
                'user_id' => $seller->id
            ],
            [
                'name' => 'Black Orchid',
                'brand' => 'Tom Ford',
                'scent_type' => 'Oriental Floral',
                'description' => 'A luxurious and sensual fragrance with rich dark notes.',
                'price' => 134.99,
                'user_id' => $seller->id
            ],
            [
                'name' => 'La Vie Est Belle',
                'brand' => 'Lancome',
                'scent_type' => 'Floral Fruity Gourmand',
                'description' => 'A sweet and elegant fragrance with iris and vanilla notes.',
                'price' => 79.99,
                'user_id' => $seller->id
            ],
            [
                'name' => 'Light Blue',
                'brand' => 'Dolce & Gabbana',
                'scent_type' => 'Citrus Aromatic',
                'description' => 'A refreshing Mediterranean-inspired scent.',
                'price' => 69.99,
                'user_id' => $seller->id
            ],
        ];

        foreach ($fragrances as $fragrance) {
            Fragrance::create($fragrance);
        }
    }
}