<?php

namespace App\Http\Controllers\jobs;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Jobs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CustomerController extends Controller
{
   
    public function Cus_Entry(Request $request) {
        $data = $request->all();
    
        $validator = Validator::make($request->all(), [
            "name" => ["required", "string"],
            "phnnumber" => ["required", "integer",],
            "whatsapp" => ["integer"],
            "email" => ["required", "email"],
            "address" => ["required", "string", "max:100"],
            
        ]);
    
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(["error" => $errors], 400);
        }
    
        
        Customer::create([
            "cus_id" => $this->generateCustomerId(),
            "name" => $data["name"],
            "pnumber" => $data["phnnumber"],
            "wnumber" => $data["whatsapp"],
            "email" => $data["email"],
            "address" => $data["address"]
        ]);
    
      
    
        return response()->json(null, 201);
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

