<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Client;
use App\Models\Event;
use App\Models\Tour;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Home', [
            'tours' => Tour::where('is_featured', true)->orderBy('sort_order')->limit(6)->get(),
            'events' => Event::where('is_featured', true)->orderBy('sort_order')->limit(6)->get(),
            'articles' => Article::where('is_featured', true)->orderBy('sort_order')->limit(6)->get(),
            'clients' => Client::where('is_featured', true)->orderBy('sort_order')->limit(10)->get(),
        ]);
    }
}
