<?php

namespace App\Http\Controllers\api;

use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Models\Category;


class CategoryController extends ApiController
{
    public function getAllCategories()
    {
        return $this->successResponse(
            Category::orderBy('id', 'desc')
                ->get()
        );
    }

    public function getCategoryById(Category $category)
    {
        return $this->successResponse($category);
    }

    public function addNewCategory(CategoryStoreRequest $request)
    {
        $this->authorize('create');
        $validated = $request->validated();
        $category = new Category($validated);
        $id = $category->save();
        return $this->successResponse(['id' => $id]);
    }

    public function updateCategoryById(CategoryUpdateRequest $request, Category $category)
    {
        $this->authorize('update');
        $validated = $request->validated();
        return $this->okResponse($category->save($validated));
    }

    public function deleteCategoryById(Category $category)
    {
        $this->authorize('delete', $category);
        return $this->okResponse($category->delete());
    }
}
