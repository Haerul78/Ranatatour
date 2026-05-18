<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\MemberAuthController;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EventController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\TourController;
use App\Http\Controllers\Pages\AboutPageController;
use App\Http\Controllers\Pages\ContactPageController;
use App\Http\Controllers\Pages\EventPageController;
use App\Http\Controllers\Pages\HomeController;
use App\Http\Controllers\Pages\TourPageController;

Route::get('/', HomeController::class);

Route::get('/about-us', AboutPageController::class);

Route::get('/contact', ContactPageController::class);

Route::get('/tour', TourPageController::class);

Route::get('/event', EventPageController::class);

Route::get('/login', [MemberAuthController::class, 'showLoginForm']);
Route::post('/login', [MemberAuthController::class, 'login']);
Route::post('/logout', [MemberAuthController::class, 'logout']);

Route::get('/admin/login', [AdminAuthController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [AdminAuthController::class, 'login']);
Route::get('/admin/signup', [AdminAuthController::class, 'showSignupForm']);
Route::post('/admin/signup', [AdminAuthController::class, 'signup']);
Route::post('/admin/logout', [AdminAuthController::class, 'logout'])->middleware('admin.session');

Route::middleware('admin.session')->prefix('admin')->group(function () {
    Route::get('/', [DashboardController::class, 'index']);
    Route::resource('tours', TourController::class)->except(['show']);
    Route::resource('events', EventController::class)->except(['show']);
    Route::resource('articles', ArticleController::class)->except(['show']);
    Route::resource('clients', ClientController::class)->except(['show']);
    Route::get('users', function () {
        return Inertia::render('Admin/Users/Index');
    });
    Route::get('settings', [SettingsController::class, 'edit']);
    Route::put('settings', [SettingsController::class, 'update']);
});
