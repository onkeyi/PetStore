<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pet;

class UserFavorite extends Model
{
    use HasFactory;
    protected $fillable = ['pet_id', 'user_id'];

    public function pet() {
        return $this->hasOne(Pet::class, 'id', 'pet_id')->with(['tags', 'photoUrls', 'owner']);
    }
}
