<template></template>
<script>
import { PetApi, RequestPetStore } from "pet_store_api";
export default {
  data: () => ({
    message: null,
    name: null,
    category: null,
    photoUrls: [],
    tags: [],
    description: null,
  }),
  methods: {
    register() {
      if (!this.name) {
        this.message = "名を入力してください。";
        return;
      }
      if (!this.category) {
        this.message = "カテゴリを選択してください。";
        return;
      }
      if (!this.photoUrls.length == 0) {
        this.message = "写真を";
        return;
      }
      if (!this.description) {
        this.message = "詳細を入力してください。";
        return;
      }
      let petApi = new PetApi();

      let request = new RequestPetStore();
      request.name = this.name;
      request.category = this.category;
      request.photoUrls = this.photoUrls;
      request.tags = this.tags;
      let opts = {
        requestPetStore: request,
      };
      petApi.addNewPet().then(
        (data) => {},
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>
