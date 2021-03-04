<template>
  <div>
    <router-view></router-view>
    <footer class="store-footer">
      <p>
        {{ $appName }}
        <a href="#">Power</a> by <a href="#">@onkeyi</a>
      </p>
    </footer>
  </div>
</template>

<script>
import { ApiClient } from "pet_store_api";

export default {
  data: () => ({
    showLoading: false,
  }),
  created: function () {
    let defaultClient = ApiClient.instance;

    let apiKey = defaultClient.authentications["apiKey"];
    apiKey.apiKey = process.env.MIX_API_KEY;
    const token = localStorage.getItem("accessToken");
    if (token) {
      let bearer = defaultClient.authentications["bearer"];
      bearer.accessToken = token;
    }
    this.$router.beforeEach((to, from, next) => {
      let isAuthenticated = localStorage.getItem("accessToken") ? true : false;
      if (to.name === "my-page" && !isAuthenticated) next({ name: "login" });
      else next();
    });
  },
};
</script>
<style>
#wrapper {
  overflow-x: hidden;
}
#page-content-wrapper {
  min-width: 100vw;
}
</style>
