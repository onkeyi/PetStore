<template>
  <div class="container">
    <page-header />
    <category-navbar />
    <main role="main" >
      <loading />
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </main>
    <footer>
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

  }),

  created: function () {
    let defaultClient = ApiClient.instance;
    defaultClient.basePath = process.env.MIX_API_URL + "/api";
    let apiKey = defaultClient.authentications["apiKey"];
    apiKey.apiKey = process.env.MIX_API_KEY;
    const info = this.$store.getters["userInfo"];
    if (info) {
      let bearer = defaultClient.authentications["bearer"];
      bearer.accessToken = info.token;
    }

    this.$router.beforeEach((to, from, next) => {
      this.$store.commit("setLoading", true);
      if (to.name === "my-page" && !this.$store.getters["userInfo"])
        next({ name: "login" });
      else next();
    });

    this.$router.afterEach(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.$store.commit("setLoading", false);
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
footer {
  height: 50px;
  bottom: 0;
  width: 100%;
}
</style>
