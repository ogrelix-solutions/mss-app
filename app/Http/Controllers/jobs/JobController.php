<?php

namespace App\Http\Controllers\jobs;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Jobs;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class JobController extends Controller
{
    public function job_entry(Request $request) {
        $data = $request->all();
    
        $validator = Validator::make($request->all(), [
            "cusid"=>["required"],
            "stype" => ["required", "string"],
            "productreport" => ["required", "string"],
            "configuration" => ["required", "string"],
            "adate" => ["required", "date"],  // Validate adate field
        ]);
    
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(["error" => $errors], 400);
        }
    
        $jobs = Jobs::create([
            "cus_id" => $data["cusid"],
            "type" => $data["stype"],
            "prc" => $data["productreport"],
            "accon" => $data["configuration"],
            "adate" => $data["adate"], 
            "gdate"=>$data["gdate"]
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

            return response()->json([
                'success' => false,
                'message' => 'Job not found'
            ], 404);
        }
    }

    public function downloadJobCard(Request $request)
    {

        $id  = $request->only('id');
        $job = Jobs::where('id', $id)->first();
    
        $customer = Customer::where('cus_id', $job->cus_id)->first();
    
      
        $data = [
            'job' => $job,
            'customer' => $customer
        ];
    
        $pdf = PDF::loadView('jobcard', $data);
    
        return $pdf->download('jobcard.pdf');
    }
    
    
    
}

