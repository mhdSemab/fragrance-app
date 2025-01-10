<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Property;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('properties')->truncate();

        $properties = [
            [
                'type' => 'Apartment',
                'description' => 'Cozy 2-bedroom apartment near downtown amenities.',
                'address' => '123 Maple St',
                'city' => 'New York',
                'rooms' => 2,
                'listing_status' => 'available',
                'price' => 250000.00,
            ],
            [
                'type' => 'House',
                'description' => 'Spacious family home with large backyard and pool.',
                'address' => '456 Oak Ave',
                'city' => 'Los Angeles',
                'rooms' => 4,
                'listing_status' => 'pending',
                'price' => 650000.00,
            ],
            [
                'type' => 'Condo',
                'description' => 'Modern condo in a high-rise building with city views.',
                'address' => '789 Pine Blvd',
                'city' => 'Miami',
                'rooms' => 3,
                'listing_status' => 'sold',
                'price' => 3200000.00,
            ],
            [
                'type' => 'Studio',
                'description' => 'Compact studio, ideal for singles, close to subway.',
                'address' => '101 Cedar St',
                'city' => 'Chicago',
                'rooms' => 1,
                'listing_status' => 'available',
                'price' => 180000.00,
            ],
            [
                'type' => 'Townhouse',
                'description' => 'Three-story townhouse with rooftop terrace.',
                'address' => '202 Birch Ln',
                'city' => 'Seattle',
                'rooms' => 3,
                'listing_status' => 'available',
                'price' => 4500000.00,
            ],
            [
                'type' => 'Apartment',
                'description' => 'Newly renovated apartment with modern finishes and ample storage.',
                'address' => '303 Spruce Dr',
                'city' => 'Austin',
                'rooms' => 2,
                'listing_status' => 'rented',
                'price' => 2200000.00,
            ],
            [
                'type' => 'House',
                'description' => 'Beautiful bungalow in quiet neighborhood with spacious garden.',
                'address' => '404 Elm St',
                'city' => 'Denver',
                'rooms' => 5,
                'listing_status' => 'available',
                'price' => 550000.00,
            ],
            [
                'type' => 'Duplex',
                'description' => 'Two-story duplex with individual entrances for each unit.',
                'address' => '505 Chestnut Ave',
                'city' => 'San Diego',
                'rooms' => 6,
                'listing_status' => 'pending',
                'price' => 680000.00,
            ],
            [
                'type' => 'Studio',
                'description' => 'Minimalist studio apartment in prime location.',
                'address' => '606 Redwood Rd',
                'city' => 'San Jose',
                'rooms' => 1,
                'listing_status' => 'available',
                'price' => 200000.00,
            ],
            [
                'type' => 'Penthouse',
                'description' => 'Luxury penthouse with panoramic views and private pool.',
                'address' => '707 Aspen Ct',
                'city' => 'Boston',
                'rooms' => 4,
                'listing_status' => 'sold',
                'price' => 1200000.00,
            ],
            [
                'type' => 'Cottage',
                'description' => 'Charming cottage near the countryside with vintage decor.	',
                'address' => '808 Willow Way',
                'city' => 'Portland',
                'rooms' => 2,
                'listing_status' => 'available',
                'price' => 350000.00,
            ],
            [
                'type' => 'Townhouse',
                'description' => 'Townhouse with open floor plan and private garage.	',
                'address' => '909 Maple St',
                'city' => 'Dallas',
                'rooms' => 3,
                'listing_status' => 'pending',
                'price' => 41000000.00,
            ],
            [
                'type' => 'Apartment',
                'description' => 'Bright apartment with balcony, overlooking the park.	',
                'address' => '1010 Oak Ave',
                'city' => 'Atlanta',
                'rooms' => 2,
                'listing_status' => 'available',
                'price' => 2700000.00,
            ],
            [
                'type' => 'House',
                'description' => 'Family-friendly home with spacious backyard, perfect for pets.	',
                'address' => '1111 Cedar St',
                'city' => 'Phoenix',
                'rooms' => 4,
                'listing_status' => 'rented',
                'price' => 6000000.00,
            ],
            [
                'type' => 'Villa',
                'description' => 'Lavish villa with pool and stunning mountain views.	',
                'address' => '1212 Birch Ln',
                'city' => 'Las Vegas',
                'rooms' => 5,
                'listing_status' => 'available',
                'price' => 950000.00,
            ],
            [
                'type' => 'Condo',
                'description' => 'Condo with updated appliances and in-building gym.',
                'address' => '1313 Spruce Dr',
                'city' => 'Orlando',
                'rooms' => 2,
                'listing_status' => 'available',
                'price' => 3000000.00,
            ],
            [
                'type' => 'Apartment',
                'description' => 'Pet-friendly apartment in vibrant neighborhood.	',
                'address' => '1414 Elm Street',
                'city' => 'Houston',
                'rooms' => 3,
                'listing_status' => 'pending',
                'price' => 3000000.00,
            ],
            [
                'type' => 'Studio',
                'description' => 'Compact studio, suitable for students, close to university.',
                'address' => '1515 Chestnut Ave',
                'city' => 'Philadelphia',
                'rooms' => 1,
                'listing_status' => 'available',
                'price' => 1900000.00,
            ],
            [
                'type' => 'House',
                'description' => 'Newly built home in suburban area with energy-efficient design.',
                'address' => '1616 Redwood Rd',
                'city' => 'San Antonio',
                'rooms' => 4,
                'listing_status' => 'sold',
                'price' => 1700000.00,
            ],
            [
                'type' => 'Penthouse',
                'description' => 'Modern Penthouse with rooftop garden and city skyline views.',
                'address' => '1717 Aspen Ct',
                'city' => 'San Francisco',
                'rooms' => 5,
                'listing_status' => 'available',
                'price' => 13000000.00,
            ],
        ];

        foreach ($properties as $property)
        {
            Property::create($property);
        }
    }
}
