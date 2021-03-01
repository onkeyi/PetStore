<template>
  <div>
    <div v-if="total >= $perPage" class="m-2 d-flex justify-content-end">
      <router-link class="btn btn-sm btn-outline-secondary" :to="{path:'/',query:{sorted:'desc'}}">↑</router-link>
      <router-link class="btn btn-sm btn-outline-secondary ml-1" :to="{path:'/',query:{sorted:'asc'}}">↓</router-link>
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
import { UserApi, ApiClient, RequestAuthLogin, PetApi } from "pet_store_api";
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
      let that = this;
      let queryParams = {
        order: this.$route.query.order,
        sorted: this.$route.query.sorted,
        page: this.$route.query.page
      };
      this.petApi.getAllPets(queryParams, (error, data, response) => {
        if (error) {
          console.error(error);
          return;
        }
        if (Object.keys(data).length === 0) {
          return;
        }
        that.pets = data.data;
        that.total = data ? data.total : 0;
        that.perPage = data ? data.per_page : 0;
        that.links = data ? data.links : [];
console.log(that.links);
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
      let that = this;
      this.petApi.findPetByCategory(opts, (error, data, response) => {
        if (error) {
          console.error(error);
          return;
        }
        if (Object.keys(data).length === 0) {
            return;
        }
        that.pets = data.data;
        that.total = data ? data.total : 0;
        that.perPage = data ? data.per_page : 0;
        that.links = data ? data.links : [];
      });
    },

    findByTag(tags) {
      let opts = {
        tag: tags,
      };
      let that = this;

      this.petApi.findPetByTag(opts, (error, data, response) => {
        if (error) {
          console.error(error);
          return;
        }
        if (Object.keys(data).length === 0) {
            return;
        }
        that.pets = data.data;
        that.total = data ? data.total : 0;
        that.perPage = data ? data.per_page : 0;
        that.links = data ? data.links : [];
      });
    },
  },
};
</script>
