<template>
  <nav class="navbar p-3">
    <router-link :to="{ name: 'store-home' }">{{ $appName }}</router-link>
    <div class="d-flex justify-content-end align-items-center">
      <form @submit="searchByTag" class="form-inline">
        <input v-model="inputTag" type="text" placeholder="Search" required />
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
      </form>
      <a
        v-if="userInfo"
        class="btn btn-sm btn-outline-secondary"
        href="#/mypage"
        >{{ $t("message.mypage") }}</a
      >
      <a v-else class="btn btn-sm btn-outline-secondary" href="#/login">{{
        $t("message.login")
      }}</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "nav-bar",
  data: () => ({
    userInfo: null,
    inputTag: null,
    tags: null,
  }),
  created: function () {
    this.userInfo = this.$store.getters["userInfo"];
  },
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
<style scoped>
.navbar {
  border-bottom: 1px solid gray;
}
</style>