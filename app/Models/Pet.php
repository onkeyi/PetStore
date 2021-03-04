<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PetTag;
use App\Models\PetPhotoUrl;
use App\Models\Category;
use App\Models\User;
use App\Models\PetComment;

class Pet extends Model
{
    use HasFactory;
    protected $visible = ['id','name', 'tags', 'category', 'photoUrls', 'status', 'comments','commentCount','owner','description'];
    protected $fillable = ['name', 'user_id', 'category_id', 'status','description'];

    public function tags()
    {
        return $this->hasMany(PetTag::class);
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

    public function commentCount() {
        return $this->hasMany(PetComment::class)->count();;
    }

    public function comments()
    {
        return $this->hasMany(PetComment::class)->join('users', 'users.id', '=', 'pet_comments.user_id');
        // return $this->hasMany(PetComment::class)->with(['user']);

    }
}
