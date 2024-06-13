<?php

namespace App\Http\Controllers\jobs;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Jobs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class JobController extends Controller
{
    public function job_entry(Request $request){
        $data = $request->all();
    
        $validator = Validator::make($request->all(), [
            "name"=>["required","string"],
            "phnnumber"=>["required","integer"],
            "whatsapp"=>["integer"],
            "email"=>["required","email"],
            "address"=>["required","string","max:100"],
            "stype"=>["required","string"],
            "productreport"=>["required","string"],
            "configuration"=>["required","string"]
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(["error" => $errors], 400);
        }
        $customerId = $this->generateCustomerId();
        $Customer = Customer::create([
            "cus_id"=>$customerId,
            "name"=> $data["name"],
            "pnumber"=> $data["phnnumber"],
            "wnumber"=> $data["whatsapp"],
            "email"=>$data["email"],
            "address"=>$data["address"]
        ]);
        $jobs = Jobs::create([
            "cus_id"=>$customerId,
            "type"=>$data["stype"],
            "prc"=> $data["productreport"],
            "accon"=> $data["configuration"],
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


    public function Get_Job(Request $request){
        $Customers = Customer::all();
        $data = [];
    
        foreach($Customers as $Customer){
            $jobs = Jobs::where('cus_id', $Customer->cus_id)->get();
            $data[] = [
                'customer' => $Customer,
                'jobs' => $jobs
            ];
        }
        return response()->json($data);
    }

    public function Update_Jobs(Request $request) {
        
    
        $validatedData = $request->validate([
            'id' => 'required|string',
            'key' => 'required|string',
            'value' => 'required'
        ]);
    

        $job = Jobs::where('cus_id', $validatedData['id'])->first();
    

        if ($job) {
    
            $job->update([$validatedData['key'] => $validatedData['value']]);
            

            return response()->json([
                'success' => true,
                'message' => 'Job updated successfully',
                'data' => $job
            ], 200);
        } else {
            // Return an error response if the job is not found
            return response()->json([
                'success' => false,
                'message' => 'Job not found'
            ], 404);
        }
    }
    

    
    
}

