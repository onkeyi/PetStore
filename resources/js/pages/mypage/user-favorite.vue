<template>
  <div>
    <ul>
      <li v-for="(value, key) in pets" :key="key">
        id:{{ value.id }} / {{ value.name }} / {{ value.status
        }}<button v-on:click="deleteFavorite(value.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  name: "my-favorite",
  data: () => ({ pets: [] }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    async loadData() {
      let userApi = new UserApi();
      this.pets = await userApi.getUserFavorites();
    },

    async deleteFavorite(id) {
      let userApi = new UserApi();
      let result = await userApi.deleteUserFavoriteByPetId(id);

      if (result.ok) {
        this.loadData();
      }
    },
  },
};
</script>