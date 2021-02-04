<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PetTag;
use App\Models\PetPhotoUrl;
use App\Models\Category;
use App\Models\User;

class Pet extends Model
{
    use HasFactory;
    protected $visible = ['id', 'name', 'tags', 'category', 'photoUrls', 'status', 'owner'];
    protected $fillable = ['name', 'user_id', 'category_id', 'status'];

    public function tags()
    {
        return $this->hasMany(PetTag::class)
            ->join('tags', 'tags.id', '=', 'pet_tags.tag_id');
    }

    public function photoUrls()
    {
        return $this->hasMany(PetPhotoUrl::class);
    }

    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

    public function owner()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}