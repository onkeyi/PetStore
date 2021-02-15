<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetPhotoUrl extends Model
{
    use HasFactory;
    protected $visible = ['photo_url'];
    protected $fillable = ['pet_id', 'photo_url'];
    public function toArray()
    {
        return $this->photo_url;
    }
}
