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

        $job = Customer::create([
            "cus_id"=>"cs001",
            "name"=> $data["name"],
            "pnumber"=> $data["phnnumber"],
            "wnumber"=> $data["whatsapp"],
            "email"=>$data["email"],
            "address"=>$data["address"]
        ]);


        return response()->json(201);
    }
}
