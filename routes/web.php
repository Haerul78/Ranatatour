<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/tour', function () {
    return Inertia::render('Tour');
});
