<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Client;
use App\Models\Event;
use App\Models\Tour;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'tours' => Tour::count(),
                'events' => Event::count(),
                'articles' => Article::count(),
                'clients' => Client::count(),
            ],
            'latestTours' => Tour::orderByDesc('created_at')->limit(5)->get(),
            'latestEvents' => Event::orderByDesc('created_at')->limit(5)->get(),
        ]);
    }
}
