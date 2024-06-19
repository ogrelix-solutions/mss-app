<?php

use App\Http\Controllers\jobs\CustomerController;
use App\Http\Controllers\jobs\JobController;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/jobentry', [JobController::class, 'job_entry']);
Route::post('/customerentry', [CustomerController::class, 'Cus_Entry']);
Route::post('/jobsget',[JobController::class,'Get_Job']);
Route::post('/updatejobs',[JobController::class,'Update_Jobs']);
Route::post('/customerget',function () {
    return response()->json(Customer::all());
}
);

Route::post('/download-jobcard', [JobController::class, 'downloadJobCard']);
