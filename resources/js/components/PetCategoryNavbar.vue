<template>
  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
      <router-link
        class="p-2 text-muted"
        :to="{ path: '/', query: { category: value.id } }"
        v-for="(value, key) in categories"
        :key="key"
      >
        {{ value.name }}
      </router-link>
    </nav>
  </div>
</template>
<script>
import { CategoryApi } from "pet_store_api";
export default {
  name: "PetCategoryNavbar",
  data: () => ({
    categories: [],
  }),
  mounted: function () {
    let apiInstance = new CategoryApi();
    let that = this;
    apiInstance.getAllCategorys((error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        that.categories = data;
      }
    });
  },
};
</script>
