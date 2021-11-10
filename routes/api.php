<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\CountyController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\SelectSearchController;
use App\Http\Controllers\SettlementController;
use App\Http\Controllers\SizeController;
use App\Http\Controllers\SpeciesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth')->group(function(){
    Route::resource('/invitations',InvitationController::class);
    Route::resource('/counties', CountyController::class);
    Route::resource('/category', CategoryController::class);
    Route::resource('/size', SizeController::class);
    Route::resource('/species', SpeciesController::class);
    Route::resource('/colors', ColorController::class);
    Route::resource('/settlement', SettlementController::class);



    Route::get('/SelectSearch/county',[SelectSearchController::class,'getCountyOptions']);
});

