<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('view_blades.welcome');
})->name('welcome');


Route::get('/about_us', function () {
    return view('view_blades.about_us');
})->name('about');


Route::get('/animals', function () {
    return view('view_blades.animals');
})->name('animals');

Route::get('/shelters', function () {
    return view('view_blades.shelters');
})->name('shelters');


Auth::routes();

Route::get('/super_admin_dashboard', [App\Http\Controllers\HomeController::class, 'index'])
    ->middleware('auth')
    ->name('super_admin_dashboard');

Route::get('/super_admin_dashboard/invitation', function () {
    return view('super_admin_views.invitations');
})->middleware('auth')->name('invitations');
