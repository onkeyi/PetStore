<template>
  <div>
    <ul>
      <li v-for="(value,key) in pets" :key="key">id:{{value.id}} / {{ value.name }}</li>
    </ul>
  </div>
</template>
<script>
import { UserApi, RequestPetStore } from "pet_store_api";
export default {
  name: "my-item",
  data: () => ({ pets: [] }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    async loadData() {
      let userApi = new UserApi();
      this.pets = await userApi.getUserPets();
    },
  },
};
</script>
