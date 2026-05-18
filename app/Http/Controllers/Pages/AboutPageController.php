<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Inertia\Inertia;

class AboutPageController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('AboutUs', [
            'about' => SiteSetting::query()->first(),
        ]);
    }
}
