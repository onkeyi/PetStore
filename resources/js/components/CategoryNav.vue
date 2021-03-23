<template>
  <div class="nav-scroller py-1 mb-2">
    <ul class="nav">
      <li
        v-bind:class="'nav-item ' + (value.id == selectedId ? 'active' : '')"
        v-on:click="loadSubCateogry(value.id, value.parent_id)"
        v-for="(value, key) in topCategories"
        :key="key"
      >
        <a class="nav-link text-muted" href="#">{{ value.name }} </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { CategoryApi } from "pet_store_api";
export default {
  name: "category-nav",
  data: () => ({
    categories: [],
    topCategories: [],
    subCategories: [],
    selectedId: null,
  }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    async loadData() {
      let apiInstance = new CategoryApi();
      this.categories = await apiInstance.getAllCategorys();
      this.categories.forEach((category) => {
        if (category.parent_id == -1) {
          this.topCategories.push(category);
        }
      });
    },
    loadSubCateogry(id, parentId) {
      this.selectedId = id;
      this.subCategories = [];
      if (parentId != -1) {
        this.categories.forEach((category) => {
          if (category.parent_id == parentId) {
            this.subCategories.push(category);
          }
        });
      }
      if (this.subCategories.length == 0) {
        this.$router.push({ path: "/", query: { category: id } });
      }
    },
  },
};
</script>
<style scoped>

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: .875rem;
}
</style>