<?php

namespace App\Http\Controllers\jobs;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Jobs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class JobController extends Controller
{
    public function job_entry(Request $request)
    {
        $data = $request->all();
        
        // Generate unique customer ID
        $customerId = $this->generateCustomerId();

        $validator = Validator::make($request->all(), [
            // Your validation rules here
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(["error" => $errors], 400);
        }

        $job = Customer::create([
            "cus_id" => $customerId, 
        ]);

        return response()->json(201);
    }


    private function generateCustomerId()
    {
        $lastCustomer = Customer::orderBy('id', 'desc')->first();
        if ($lastCustomer) {
            $lastCustomerId = $lastCustomer->cus_id;
            $lastId = substr($lastCustomerId, strpos($lastCustomerId, '-') + 1);
            $nextId = intval($lastId) + 1;
            $customerId = 'cs-' . str_pad($nextId, 4, '0', STR_PAD_LEFT);
        } else {
            $customerId = 'cs-0001'; 
        }
        return $customerId;
    }
}

