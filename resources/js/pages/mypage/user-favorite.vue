<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body"><p>Favorite</p></div>
    </div>
    <div class="row">
      <div class="col" v-for="(pet, key) in pets" :key="key">
          <item-list-card v-bind:pet="pet"  detailLink="/mypage/favorite/detail"/>
      </div>
    </div>
  </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  name: "my-favorite",
  data: () => ({ pets: [], total: 0, perPage: 0, links: null }),
  created: function () {
    this.loadData();
  },
  methods: {
    async loadData() {
      let userApi = new UserApi();
      const pagenation = await userApi.getUserFavorites();

      this.setData(pagenation);
    },
    async deleteFavorite(id) {
      let userApi = new UserApi();
      let result = await userApi.deleteUserFavoriteByPetId(id);

      if (result.ok) {
        this.loadData();
      }
    },
    setData(pagenation) {

      this.pets = pagenation.data;
      this.total = pagenation ? pagenation.total : 0;
      this.perPage = pagenation ? pagenation.per_page : 0;
      this.links = pagenation ? pagenation.links : [];
    },
  },
};
</script>