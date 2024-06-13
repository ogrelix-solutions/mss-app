<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('cus_id');
            $table->date('gdate')->nullable();
            $table->string('type');
            $table->text('jobstatus')->nullable();
            $table->date('ddate')->nullable();
            $table->longText('psno')->nullable();
            $table->text('accon')->nullable(); //Accessories and Configuration
            $table->longText('prc');//Problem Report by the CUSTOMER
            $table->text('action_taken_customer')->nullable(); //actiontaken
            $table->text('action_taken_provider')->nullable(); //actiontaken
            $table->text('return_condition')->nullable(); //return condition
            $table->date('delivery')->nullable(); //delivery date
            $table->integer('rough_estimate')->nullable();
            $table->integer('amount_breakup')->nullable();
            $table->integer('final_amount')->nullable();
            $table->integer('cash_mode')->nullable();
            $table->integer('cash_field')->nullable();
            $table->integer('remarks_mss')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
