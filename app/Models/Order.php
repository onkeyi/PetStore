<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $visible = ['id', 'quantity', 'ship_date', 'user', 'pet', 'status'];
    protected $fillable = [];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function pet()
    {
        return $this->hasOne(Pet::class, 'id', 'pet_id');
    }
}
