<template>
  <div class="row">
    <div class="col mb-3 d-flex justify-content-start">
      <label>name:</label>
      <input type="text" v-model="name" />
    </div>
    <div class="col mb-3 d-flex justify-content-start">
      <label>category:</label>
      <input type="text" v-model="categoryId" />
    </div>
    <!-- <input type="file" v-model="image" /> -->
    <div class="col">
      <label>desc:</label>
      <input type="text" v-model="description" />
    </div>
    <div class="col">
      <label>tag:</label>
      <input type="text" v-model="tags" />
    </div>
    <button v-on:click="register">Save</button>
    <p>{{ message }}</p>
    <input v-on:change="selectedFile" type="file" name="file" />
  </div>
</template>
<script>
import { PetApi, RequestPetStore } from "pet_store_api";
export default {
  name: "item-register",
  data: () => ({
    message: null,
    name: null,
    categoryId: null,
    photoUrls: [],
    tags: "",
    description: null,
    uploadFile: null,
  }),
  methods: {
    selectedFile(e) {
      // 選択された File の情報を保存しておく
      e.preventDefault();
      let files = e.target.files;
      this.uploadFile = files[0];
      this.upload();
    },
    async upload() {
      let petApi = new PetApi();
      let data = await petApi.uploadImage({ image: this.uploadFile });
      this.photoUrls.push(data.file_name);
    },
    async register() {
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
      let petApi = new PetApi();

      let request = new RequestPetStore();
      request.name = this.name;
      request.category_id = this.categoryId;
      request.photo_urls = this.photoUrls;
      request.tags = this.tags.split(/,|\s/);
      request.description = this.description;
      let opts = {
        requestPetStore: request,
      };

      let pet = await petApi.addNewPet(opts);
    },
  },
};
</script>
