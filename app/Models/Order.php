<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $visible = ['id', 'quantity', 'ship_date', 'orderUser', 'pet', 'status'];
    protected $fillable = ['quantity', 'ship_date', 'pet_id', 'user_id', 'status'];

    public function orderUser()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function pet()
    {
        return $this->hasOne(Pet::class, 'id', 'pet_id')->with(['tags', 'photoUrls', 'owner']);
    }
}
