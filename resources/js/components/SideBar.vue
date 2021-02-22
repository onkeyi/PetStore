<template>
  <div>
    <b-button v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" >
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto">Footer</strong>
        <b-button size="sm" @click="hide">Close</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <ul>
          <li v-for="item in categories" >
            <router-link :to="{ path: 'home',query: { category:item.id } }">{{ item.name }}</router-link>
          </li>
        </ul>

      </div>
    </b-sidebar>
  </div>
</template>
<script>
import { CategoryApi } from 'pet_store_api';
export default {
    name: 'SideBar',
    data: () => ({
        errorMessage : '',
        categories: [],
        showLoading : false
    }),
    created: function() {
        let apiInstance = new CategoryApi();
        let that = this;
        apiInstance.getAllCategorys((error, data, response) => {
          if (error) {
              console.error(error);
          } else {
              that.categories = data;
          }
        });
    }
}
</script>
