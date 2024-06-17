<?php

use App\Http\Controllers\jobs\CustomerController;
use App\Http\Controllers\jobs\JobController;
use App\Http\Controllers\ProfileController;
use App\Models\Customer;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});




Route::get('/jobcard',function () {
    return view('jobcard');
});

Route::get('/jobcard',function () {
    return view('jobcard');
});