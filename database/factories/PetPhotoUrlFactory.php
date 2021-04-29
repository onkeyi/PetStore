<?php

namespace Database\Factories;

use App\Models\PetPhotoUrl;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PetPhotoUrlFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PetPhotoUrl::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "photo_url" =>
            $this->faker->image(storage_path('app/public/pets'), 160, 160, null, false)
        ];
    }
}
