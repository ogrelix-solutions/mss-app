<?php

namespace App\Http\Controllers\jobs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function job_entry(Request $request){
        $data = $request->all();
        return response()->json($data,200);
    }
}
