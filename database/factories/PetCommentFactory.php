<?php

namespace Database\Factories;

use App\Models\PetComment;
use Illuminate\Database\Eloquent\Factories\Factory;

class PetCommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PetComment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pet_id' => $this->faker->numberBetween(1, 50),
            'user_id' => $this->faker->numberBetween(1, 10),
            'comment' => $this->faker->sentence(3, true)
        ];
    }
}
