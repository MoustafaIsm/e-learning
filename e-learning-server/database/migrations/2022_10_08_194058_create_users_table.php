<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function ($collection) {
            $collection->id();
            $collection->string('name');
            $collection->string('email');
            $collection->string('password');
            $collection->date('date_of_birth');
            $collection->string('profile_picture_url')->default('NA');
            $collection->integer('role_id');
            $collection->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
