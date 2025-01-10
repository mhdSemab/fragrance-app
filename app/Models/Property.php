<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    //
    protected $fillable = [
        'type', 'description', 'address', 'city', 'rooms', 'listing_status', 'price'
    ];
}
