<template>
  <div>
    <div class="row">
    <div v-if="total >= $perPage" class="col mb-3 d-flex justify-content-start">
        <div class="btn-group" role="group" >
            <button type="button" class="btn btn-outline-secondary">Left</button>
            <button type="button" class="btn btn-outline-secondary">Middle</button>
            <button type="button" class="btn btn-outline-secondary">Right</button>
        </div>
    </div>
    <div v-if="total >= $perPage" class="col mb-3 d-flex justify-content-end">
      <router-link class="btn btn-sm btn-outline-secondary " :to="{path:'/',query:{sorted:'desc'}}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
  <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
</svg></router-link>
      <router-link class="btn btn-sm btn-outline-secondary ml-2" :to="{path:'/',query:{sorted:'asc'}}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
</svg></router-link>
    </div>
</div>
    <div class="row">
      <div class="col" v-for="(item, key) in pets" :key="key">
        <PetListCard v-bind:pet="item"></PetListCard>
      </div>
   </div>

    <nav v-if="total >= perPage" aria-label="Page navigation ">
        <ul class="pagination">
            <li v-for="(value,key) in links" :key="key" :class="value.active || value.url === null ? 'page-item disabled' : 'page-item'">
                <router-link class="page-link" :to="{path:'/',query:{'page':value.url ? value.url.split('=')[1] : null}}" >
                    {{ value.label }}
                </router-link>
            </li>
        </ul>
    </nav>
  </div>
</template>
<script>
import { PetApi } from "pet_store_api";
export default {
  name: "PetList",
  data: () => ({
    accessToken: "",
    pets: null,
    petApi: null,
    total: 0,
    perPage: 0,
    links: [],
  }),
  created: function () {
    this.petApi = new PetApi();
    this.loadData();
  },
  watch: {
    $route: "fetchData",

  },
  methods: {
    loadData() {
      let queryParams = {
        order: this.$route.query.order,
        sorted: this.$route.query.sorted,
        page: this.$route.query.page
      };
     this.petApi.getAllPets(queryParams).then((data) => {

        if (!data || Object.keys(data).length === 0) {
          return;
        }
        this.pets = data.data;
        this.total = data ? data.total : 0;
        this.perPage = data ? data.per_page : 0;
        this.links = data ? data.links : [];
      }, (error) =>{
          console.error(error);
      });
    },

    fetchData() {
      this.total = 0;
      this.error = null;
      let category = this.$route.query.category;
      let tag = this.$route.query.tag;

      if (!category && !tag) {
        this.loadData();
        return;
      }

      if (category) {
        this.findByCategory(category);
        return;
      }
      if (tag) {
        this.findByTag(tag);
      }
    },

    findByCategory(category) {
      let opts = {
        category: category,
      };
      this.petApi.findPetByCategory(opts).then((data) => {
        if (Object.keys(data).length === 0) {
            return;
        }
        this.pets = data.data;
        this.total = data ? data.total : 0;
        this.perPage = data ? data.per_page : 0;
        this.links = data ? data.links : [];
      }, (error) =>{
          console.error(error);
      });
    },

    findByTag(tags) {
      let opts = {
        tag: tags,
      };

      this.petApi.findPetByTag(opts).then((data) => {
        if (Object.keys(data).length === 0) {
            return;
        }
        this.pets = data.data;
        this.total = data ? data.total : 0;
        this.perPage = data ? data.per_page : 0;
        this.links = data ? data.links : [];
      },(error) =>{
        console.error(error);
      });
    },
  },
};
</script>
