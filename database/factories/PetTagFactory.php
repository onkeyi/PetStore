<?php

namespace Database\Factories;

use App\Models\PetTag;
use Illuminate\Database\Eloquent\Factories\Factory;

class PetTagFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PetTag::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "tag_name" => $this->faker->sentence(rand(1,4)),
        ];
    }
}
