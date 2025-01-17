<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fragrance;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FragranceSeeder extends Seeder
{
    public function run(): void
    {
        // Get seller user
        $seller = User::where('role', 'seller')->first();
        $fragrances = [
            [
                'name' => 'Bleu de Chanel',
                'brand' => 'Chanel',
                'scent_type' => 'Woody Aromatic',
                'description' => 'A fresh, clean scent with citrus and wood notes.',
                'price' => 99.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Sauvage',
                'brand' => 'Dior',
                'scent_type' => 'Fresh Spicy',
                'description' => 'A radiant fragrance with citrus top notes and woody undertones.',
                'price' => 89.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Black Orchid',
                'brand' => 'Tom Ford',
                'scent_type' => 'Oriental Floral',
                'description' => 'A luxurious and sensual fragrance with rich dark notes.',
                'price' => 134.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'La Vie Est Belle',
                'brand' => 'Lancome',
                'scent_type' => 'Floral Fruity Gourmand',
                'description' => 'A sweet and elegant fragrance with iris and vanilla notes.',
                'price' => 79.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Light Blue',
                'brand' => 'Dolce & Gabbana',
                'scent_type' => 'Citrus Aromatic',
                'description' => 'A refreshing Mediterranean-inspired scent.',
                'price' => 69.99,
                'user_id' => $seller->id,
            ],
            // Additional fragrances
            [
                'name' => 'Good Girl',
                'brand' => 'Carolina Herrera',
                'scent_type' => 'Oriental Floral',
                'description' => 'A daring yet sophisticated fragrance with jasmine and cocoa.',
                'price' => 119.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Acqua di Gio',
                'brand' => 'Giorgio Armani',
                'scent_type' => 'Aromatic Aquatic',
                'description' => 'A fresh and aquatic fragrance with marine and citrus notes.',
                'price' => 89.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Noir Extreme',
                'brand' => 'Tom Ford',
                'scent_type' => 'Amber Woody',
                'description' => 'A sophisticated blend of spice, amber, and vanilla.',
                'price' => 129.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Flowerbomb',
                'brand' => 'Viktor & Rolf',
                'scent_type' => 'Floral',
                'description' => 'An explosion of floral scents with patchouli and vanilla undertones.',
                'price' => 99.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Chance Eau Tendre',
                'brand' => 'Chanel',
                'scent_type' => 'Floral Fruity',
                'description' => 'A tender and fresh fragrance with notes of grapefruit and jasmine.',
                'price' => 94.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'L\'Homme',
                'brand' => 'Yves Saint Laurent',
                'scent_type' => 'Woody Floral Musk',
                'description' => 'A magnetic and masculine fragrance with ginger and cedarwood.',
                'price' => 85.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Libre',
                'brand' => 'Yves Saint Laurent',
                'scent_type' => 'Amber Fougere',
                'description' => 'A bold and elegant scent with lavender and orange blossom.',
                'price' => 114.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => '1 Million',
                'brand' => 'Paco Rabanne',
                'scent_type' => 'Spicy Woody',
                'description' => 'A striking fragrance with blood mandarin and cinnamon notes.',
                'price' => 89.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Ombré Leather',
                'brand' => 'Tom Ford',
                'scent_type' => 'Leather',
                'description' => 'A captivating scent with cardamom and black leather.',
                'price' => 139.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Eros',
                'brand' => 'Versace',
                'scent_type' => 'Fresh Woody',
                'description' => 'A bold fragrance with mint, green apple, and tonka bean.',
                'price' => 89.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'The One',
                'brand' => 'Dolce & Gabbana',
                'scent_type' => 'Oriental Spicy',
                'description' => 'A timeless fragrance with warm amber and spicy tobacco.',
                'price' => 79.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Invictus',
                'brand' => 'Paco Rabanne',
                'scent_type' => 'Aquatic Woody',
                'description' => 'A fresh and powerful scent with marine notes and guaiac wood.',
                'price' => 84.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Hypnotic Poison',
                'brand' => 'Dior',
                'scent_type' => 'Oriental Vanilla',
                'description' => 'A mysterious and sensual scent with vanilla and almond.',
                'price' => 99.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Armani Code',
                'brand' => 'Giorgio Armani',
                'scent_type' => 'Oriental Spicy',
                'description' => 'A seductive and elegant fragrance with tonka bean and olive flower.',
                'price' => 94.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Angel',
                'brand' => 'Thierry Mugler',
                'scent_type' => 'Gourmand',
                'description' => 'A sweet and unique scent with chocolate and patchouli.',
                'price' => 89.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Alien',
                'brand' => 'Thierry Mugler',
                'scent_type' => 'Amber Woody',
                'description' => 'An enchanting and bold scent with amber and jasmine.',
                'price' => 109.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Light Blue Intense',
                'brand' => 'Dolce & Gabbana',
                'scent_type' => 'Citrus Aromatic',
                'description' => 'A more concentrated version of the refreshing Mediterranean scent.',
                'price' => 89.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Oud Wood',
                'brand' => 'Tom Ford',
                'scent_type' => 'Woody Spicy',
                'description' => 'A luxurious scent with exotic oud and smoky woods.',
                'price' => 199.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Wood Sage & Sea Salt',
                'brand' => 'Jo Malone',
                'scent_type' => 'Aromatic',
                'description' => 'A breezy and fresh scent with sea salt and sage.',
                'price' => 89.99,
                'user_id' => $seller->id,
            ],
            [
                'name' => 'Baccarat Rouge 540',
                'brand' => 'Maison Francis Kurkdjian',
                'scent_type' => 'Amber Floral',
                'description' => 'An elegant and radiant fragrance with amber and jasmine.',
                'price' => 299.99,
                'user_id' => $seller->id,
            ],
        ];

        foreach ($fragrances as $fragrance) {
            Fragrance::create($fragrance);
        }
    }
}
