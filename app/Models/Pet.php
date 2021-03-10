<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PetTag;
use App\Models\PetPhotoUrl;
use App\Models\Category;
use App\Models\User;
use App\Models\PetComment;
use App\Models\Order;

class Pet extends Model
{
    use HasFactory;
    protected $visible = ['id','name', 'tags', 'category', 'photoUrls', 'status', 'comments','commentCount','order','owner','description'];
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

    public function order()
    {
        return $this->hasOne(Order::class)->join('users','users.id','=','orders.user_id')->select('users.name','orders.*');
    }

    public function commentCount() {
        return $this->hasMany(PetComment::class)->count();;
    }

    public function comments()
    {
        return $this->hasMany(PetComment::class)->join('users', 'users.id', '=', 'pet_comments.user_id')->select('users.name','pet_comments.*');
    }
}
