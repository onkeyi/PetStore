<template>
    <div class="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
                <div class="col grid-margin stretch-card">
                    <div class="card">
                        <div v-if="!success" class="card-body">
                            <h4 class="card-title">Form input mask example</h4>
                            <p class="card-description">
                                Take a preview of input mask format
                            </p>
                            <form>
                                <div class="form-group">
                                    <img
                                        v-for="(photo, key) in photoUrls"
                                        :key="key"
                                        width="80"
                                        :src="'/storage/tmp/' + photo"
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="">name:</label>
                                    <input
                                        v-model="name"
                                        class="form-control"
                                        type="text"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>category:</label>
                                    <select
                                        v-model="categoryId"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="(
                                                value, key
                                            ) in topCategories"
                                            :key="key"
                                            :value="value.id"
                                        >
                                            {{ value.name }}
                                        </option>
                                    </select>
                                </div>
                                <!-- <input type="file" v-model="image" /> -->
                                <div class="form-group">
                                    <label>desc:</label>
                                    <input
                                        v-model="description"
                                        class="form-control"
                                        type="text"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>tag:</label>
                                    <input
                                        v-model="tags"
                                        class="form-control"
                                        type="text"
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        class="form-control"
                                        type="file"
                                        name="file"
                                        @change="selectedFile"
                                    />
                                </div>
                                <p class="warning">
                                    {{ message }}
                                </p>
                                <button @click="register">Save</button>
                            </form>
                        </div>
                        <div v-if="success" class="card-body">
                            <h4 class="card-title">Form input mask example</h4>
                            <p class="card-description">
                                Take a preview of input mask format
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { PetApi, CategoryApi, RequestPetStore } from "pet_store_api";

export default {
    data: () => ({
        message: null,
        name: null,
        categoryId: null,
        photoUrls: [],
        tags: "",
        description: null,
        uploadFile: null,
        success: false,
        categories: [],
        topCategories: [],
    }),
    created() {
        this.getAllCategorys();
    },
    methods: {
        async getAllCategorys() {
            const apiInstance = new CategoryApi();
            this.categories = await apiInstance.getAllCategorys();
            this.categories.forEach((category) => {
                if (category.parent_id == -1) {
                    this.topCategories.push(category);
                }
            });
        },
        getSubCategories(parentId) {
            const subCategories = [];
            this.categories.forEach((category) => {
                if (category.parent_id == parentId) {
                    subCategories.push(category);
                }
            });
            return subCategories;
        },
        selectedFile(e) {
            // 選択された File の情報を保存しておく
            e.preventDefault();
            const { files } = e.target;
            this.uploadFile = files[0];
            this.upload();
        },
        async upload() {
            const petApi = new PetApi();
            const data = await petApi.uploadImage({ image: this.uploadFile });
            this.photoUrls.push(data.file_name);
            this.photoUrls.slice();
        },
        register() {
            if (!this.name) {
                this.message = "名を入力してください。";
                return;
            }
            if (!this.categoryId) {
                this.message = "カテゴリを選択してください。";
                return;
            }
            if (this.photoUrls.length == 0) {
                this.message = "画像を選択してください。";
                return;
            }
            if (!this.description) {
                this.message = "詳細を入力してください。";
                return;
            }
            const petApi = new PetApi();

            const request = new RequestPetStore();
            request.name = this.name;
            request.category_id = this.categoryId;
            request.photo_urls = this.photoUrls;
            request.tags = this.tags.split(/,|\s/);
            request.description = this.description;
            const opts = {
                requestPetStore: {
                    name: this.name,
                    category_id: this.categoryId,
                    photo_urls: this.photoUrls,
                    tags: this.tags.split(/,|\s/),
                    description: this.description,
                },
            };

            petApi.addNewPet(opts).then(
                () => {
                    this.success = true;
                },
                (error) => {
                    this.message = error;
                }
            );
        },
    },
};
</script>
