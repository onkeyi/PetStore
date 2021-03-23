<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body"><p>Favorite</p></div>
    </div>
    <div class="row">
      <div class="col" v-for="(pet, key) in pets" :key="key">
        <div
          class="card mb-4 h-md-150 text-decoration-none" style="width: 18rem">
          <div class="row bg-light">
            <div class="col float-right m-1">
              <button type="button" class="close" v-on:click="deleteFavorite(pet.id)" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <img
            class="card-img-top"
            style="width: 100%; height: 250px"
            v-bind:src="'/storage/pets/' + pet.photo_urls[0]"
            data-holder-rendered="true"
          />
          <div class="card-body">
            <strong class="card-title">{{ pet.status }}</strong>
            <div class="card-subtitle">{{ pet.name }}</div>
            <p class="card-text mb-auto">
              {{ pet.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  name: "my-favorite",
  data: () => ({ pets: [], total: 0, perPage: 0, links: null }),
  mounted: function () {
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