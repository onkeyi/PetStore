<template>
  <header class="store-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <router-link
          class="store-header-logo text-dark"
          :to="{ name: 'store-home' }"
        >
          {{ $appName }}
        </router-link>
      </div>
      <div class="d-flex justify-content-end align-items-center">
        <form @submit="searchByTag">
          <div class="form-row">
            <div class="col">
              <input
                v-model="inputTag"
                type="text"
                placeholder="Search"
                required
              />
            </div>
            <div class="col">
              <a class="text-muted" type="submit" @click="searchByTag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mx-3"
                  focusable="false"
                  role="img"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5"></circle>
                  <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                </svg>
              </a>
            </div>
          </div>
        </form>
        <a
          v-if="isLogin"
          class="btn btn-sm btn-outline-secondary"
          href="#/mypage"
          >{{ $t("message.mypage") }}</a
        >
        <a v-else class="btn btn-sm btn-outline-secondary" href="#/login"
          >{{ $t("message.login")}}</a
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HomePageHeader",
  data: () => ({
    isLogin: localStorage.getItem("accessToken") ? true : false,
    inputTag: null,
    tags: null,
  }),
  mounted: function () {},
  methods: {
    searchByTag() {
      this.$router.replace(
        { name: "store-home", query: { tag: this.inputTag } },
        () => {}
      );
    },
  },
};
</script>
