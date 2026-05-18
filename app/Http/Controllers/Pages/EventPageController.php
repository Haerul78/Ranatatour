<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Inertia\Inertia;

class EventPageController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Event', [
            'events' => Event::orderBy('sort_order')->get(),
        ]);
    }
}
