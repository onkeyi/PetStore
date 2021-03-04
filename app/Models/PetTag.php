<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetTag extends Model
{
    use HasFactory;
    protected $visible = ['tag_name'];
    protected $fillable = ['pet_id', 'tag_name'];
    // protected $primaryKey = ['pet_id', 'tag_id'];
    public function toArray()
    {
        return $this->tag_name;
    }
}
