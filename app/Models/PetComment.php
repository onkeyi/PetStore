<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Pet;

class PetComment extends Model
{
    use HasFactory;
    protected $visible = ['id', 'pet', 'user', 'comment', 'created_at'];
    protected $fillable = ['pet_id', 'user_id', 'comment'];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function pet()
    {
        return $this->hasOne(Pet::class, 'id', 'pet_id');
    }
}
