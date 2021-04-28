<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
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
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@petstore.com',
            'avatar' => "avatar",
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        ]);
        // \App\Models\Admin::factory(1)->create();
        \App\Models\User::factory(10)->create();
        \App\Models\Category::factory(50)->create();
        \App\Models\PetComment::factory(50)->create();
        $pets = \App\Models\Pet::factory(50)->create();
        foreach ($pets as $pet) {
            \App\Models\PetTag::factory(1)->create(['pet_id' => $pet->id]);
            \App\Models\PetPhotoUrl::factory(1)->create(['pet_id' => $pet->id]);
            \App\Models\Order::factory(1)->create(['pet_id' => $pet->id]);
        };
    }
}
