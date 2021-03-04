<template>
  <div>
    {{ pets }}
  </div>
</template>
<script>
import { UserApi, RequestPetStore } from "pet_store_api";
export default {
  name: "MyPet",
  data: () => ({ pets: [] }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    loadData() {
      let userApi = new UserApi();
      userApi.getUserPets().then((data) => {
        this.pets = data;
      },error => { console.log(error)});
    },
  },
};
</script>
