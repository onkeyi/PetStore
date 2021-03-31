<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'avatar' => $this->faker->image('public/storage/users', 80, 80, null, false),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'address' => $this->faker->address,
            'phone' => $this->faker->phoneNumber,
            'description' => $this->faker->realText(255),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'birthday' => $this->faker->year . '/' . $this->faker->month . '/' . $this->faker->dayOfMonth
        ];
    }
}
