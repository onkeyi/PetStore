<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetPhotoUrl extends Model
{
    use HasFactory;
    protected $visible = ['url'];

    public function toArray()
    {
        return $this->url;
    }
}
