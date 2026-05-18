<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use Inertia\Inertia;

class TourPageController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Tour', [
            'tours' => Tour::orderBy('sort_order')->get(),
        ]);
    }
}
