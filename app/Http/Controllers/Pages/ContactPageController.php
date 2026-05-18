<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Inertia\Inertia;

class ContactPageController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Contact', [
            'contact' => SiteSetting::query()->first(),
        ]);
    }
}
