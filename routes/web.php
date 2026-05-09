<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/tour', function () {
    return Inertia::render('Tour');
});

Route::get('/event', function () {
    return Inertia::render('Event');
});
