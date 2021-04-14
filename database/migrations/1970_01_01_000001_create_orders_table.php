<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('pet_id')->unique();
            $table->bigInteger('user_id');
            $table->integer('quantity')->default(1);
            $table->dateTime('ship_date')->nullable();
            $table->enum('status', ['placed', 'approved', 'delivered', 'completed'])->default('placed');
            $table->tinyInteger('complete')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
