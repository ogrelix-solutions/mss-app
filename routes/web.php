<?php

use App\Http\Controllers\jobs\JobController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});



Route::post('/api/jobentry', [JobController::class, 'job_entry']);
Route::post('/api/jobsget',[JobController::class,'Get_Job']);
Route::post('/api/updatejobs',[JobController::class,'Update_Jobs']);




Route::get('/jobcard',function () {
    return view('jobcard');
});