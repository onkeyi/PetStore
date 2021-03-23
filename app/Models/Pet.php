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
    protected $visible = ['id','name', 'tags', 'category', 'photoUrls', 'status', 'comments','comments_count','order','owner','description'];
    protected $fillable = ['name', 'user_id', 'category_id', 'status','description'];

    public function tags()
    {
        return $this->hasMany(PetTag::class)->limit(50);
    }

    public function photoUrls()
    {
        return $this->hasMany(PetPhotoUrl::class)->limit(10);
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
        return $this->hasOne(Order::class)
                    ->join('users','users.id','=','orders.user_id')
                    ->select('users.name','orders.*');
    }

    public function comments()
    {
        return $this->hasMany(PetComment::class)
                ->join('users', 'users.id', '=', 'pet_comments.user_id')
                ->select('users.name','pet_comments.*')
                ->orderBy('created_at','DESC');
    }
}
