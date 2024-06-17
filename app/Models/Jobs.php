<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{
    use HasFactory;
    protected $table = "jobs";

    protected $fillable =
    [
        "cus_id","jnumber","adate","gdate","type","jobstatus","ddate","psno","accon","prc","action_taken","return_condition","delivery","rough_estimate","amount_breakup","final_amount","cash_mode","cash_field","remarks_mss"
    ];
}
