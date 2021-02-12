<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Admin::factory(1)->create();
        \App\Models\User::factory(10)->create();
        \App\Models\Tag::factory(50)->create();
        \App\Models\Category::factory(50)->create();
        \App\Models\Order::factory(150)->create();
        $pets = \App\Models\Pet::factory(50)->create();

        foreach ($pets as $pet) {
            \App\Models\PetTag::factory(1)->create(['pet_id' => $pet->id]);
            \App\Models\PetPhotoUrl::factory(1)->create(['pet_id' => $pet->id]);
        };
    }
}