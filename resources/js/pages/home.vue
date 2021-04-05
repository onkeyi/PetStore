<template>
  <div>
    <div class="d-flex">
      <div class="p-2 mr-auto" v-if="showStatus">
        <div class="btn-group" data-toggle="buttons">
          <label
            :class="
              'btn btn-outline-secondary ' + (options == s ? 'active' : '')
            "
            v-for="(s, key) in status"
            :key="key"
          >
            <input
              class="rating-input"
              autocomplete="off"
              type="radio"
              v-on:change="searchByStatus()"
              v-model="options"
              v-bind:value="s"
            />{{ s }} - {{ inventory[s] }}
          </label>
        </div>
      </div>
      <div v-if="pets && pets.length > 0" class="p-2">
        <div class="btn-group" data-toggle="buttons">
          <label
            :class="
              'btn btn-outline-secondary ' + (orderBy == 'desc' ? 'active' : '')
            "
            v-on:click="sort('desc')"
          >
            ↑
          </label>
          <label
            :class="
              'btn btn-outline-secondary ' + (orderBy == 'asc' ? 'active' : '')
            "
            v-on:click="sort('asc')"
          >
            ↓
          </label>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-xs-6" v-for="(item, key) in pets" :key="key">
          <item-list-card v-bind:pet="item" detailLink="/detail" />
        </div>
      </div>
      <div class="alert alert-info" v-if="pets && pets.length == 0">NoData</div>
    </div>
    <nav v-if="total >= perPage">
      <ul class="pagination justify-content-center">
        <li
          v-for="(value, key) in links"
          :key="key"
          :class="
            value.active || value.url === null
              ? 'page-item disabled'
              : 'page-item'
          "
        >
          <router-link
            class="page-link"
            :to="{
              path: $route.fullPath,
              query: { page: value.url ? value.url.split('=')[1] : null },
            }"
          >
            {{ value.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { PetApi, OrderApi } from "pet_store_api";
export default {
  name: "item-list",
  data: () => ({
    accessToken: "",
    pets: null,
    petApi: null,
    total: 0,
    perPage: 0,
    links: [],
    inventory: {},
    options: null,
    orderBy: null,
    status: ["all", "available", "pending", "sold"],
    showStatus: true,
  }),
  created: function () {
    this.petApi = new PetApi();
    this.loadData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async loadData() {
      let orderApi = new OrderApi();
      this.inventory = await orderApi.getOrderInventory();
      let queryParams = {
        sort: this.$route.query.sort,
        page: this.$route.query.page,
      };
      const pagenation = await this.petApi.getAllPets(queryParams);
      this.setData(pagenation);
    },
    sort(value) {
      let category = this.$route.query["category"];
      let tag = this.$route.query["tag"];
      let status = this.$route.query["status"];
      this.$router.push({
        name: "store-home",
        query: { status: status, category: category, tag: tag, sort: value },
      });
      this.orderBy = value;
    },
    fetchData() {
      this.total = 0;
      this.error = null;
      this.showStatus = true;
      let category = this.$route.query["category"];
      let tag = this.$route.query["tag"];
      let status = this.$route.query["status"];
      if (!category && !tag && !status) {
        this.loadData();
        return;
      }

      if (category) {
        this.showStatus = false;
        this.options = "all";
        this.findByCategory(category);
        return;
      }
      if (tag) {
        this.showStatus = false;
        this.options = "all";
        this.findByTag(tag);
      }
      if (status) {
        this.findByStatus(status);
      }
    },
    searchByStatus() {
      if (!this.options || this.options == "all") {
        this.$router.replace({ name: "store-home" });
        return;
      }
      this.$router.replace(
        { name: "store-home", query: { status: this.options } },
        () => {}
      );
    },
    async findByCategory(category) {
      let opts = {
        category: category,
        page: this.$route.query.page,
        sort: this.$route.query.sort,
      };
      const pagenation = await this.petApi.findPetByCategory(opts);
      this.setData(pagenation);
    },

    async findByTag(tags) {
      let opts = {
        tag: tags,
        page: this.$route.query.page,
        sort: this.$route.query.sort,
      };

      const pagenation = await this.petApi.findPetByTag(opts);
      this.setData(pagenation);
    },
    async findByStatus(status) {
      let opts = {
        status: status,
        page: this.$route.query.page,
        sort: this.$route.query.sort,
      };
      const pagenation = await this.petApi.findPetByStatus(opts);
      this.setData(pagenation);
    },
    setData(pagenation) {
      this.pets = pagenation.data;
      this.total = pagenation ? pagenation.total : 0;
      this.perPage = pagenation ? pagenation.per_page : 0;
      this.links = pagenation ? pagenation.links : [];
      this.$store.commit("setLoading", false);
    },
  },
};
</script>
<style scoped>
.pagination {
  margin-bottom: 4rem;
}
input[type="radio"],
input[type="checkbox"] {
  visibility: hidden;
}
</style>