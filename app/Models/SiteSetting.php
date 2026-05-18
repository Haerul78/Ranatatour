<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'about_title',
        'about_summary',
        'about_body',
        'contact_address',
        'contact_phone',
        'contact_email',
        'contact_hours',
        'contact_map_url',
    ];
}
