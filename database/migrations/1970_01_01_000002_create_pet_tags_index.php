<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePetTagsIndex extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pet_tags', function (Blueprint $table) {
            $table->primary(['tag_id', 'pet_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pet_tags', function (Blueprint $table) {
            $table->dropPrimary(['tag_id', 'pet_id']);
        });
    }
}
