<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pet_id' => $this->faker->numberBetween(1, 50),
            'user_id' => $this->faker->numberBetween(1, 50),
            'quantity' => $this->faker->numberBetween(1, 3),
            'ship_date' => $this->faker->dateTimeBetween('1day', '1year')->format('Y-m-d H:i'),
            'status' => $this->faker->randomElement(['placed', 'approved', 'delivered']),
            'complete' => $this->faker->randomElement([true, false]),
        ];
    }
}
