<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategories()
    {
    }

    public function addNewCategory(CategoryStoreRequest $request)
    {
    }

    public function updateCategoryById(CategoryUpdateRequest $request, Category $category)
    {
    }

    public function deleteCategoryById(Category $category)
    {
    }
}