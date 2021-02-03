<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetTag extends Model
{
    use HasFactory;
    protected $visible = ['id', 'name'];
    protected $fillable = ['pet_id', 'tag_id'];
    // protected $primaryKey = ['pet_id', 'tag_id'];
}
