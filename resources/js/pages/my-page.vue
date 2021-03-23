<template>
  <div>
    <div class="d-flex">
      <!-- Sidebar -->
      <div class="bg-light">
        <div class="list-group list-group-flush">
          <router-link
            to="/mypage/profile"
            class="list-group-item list-group-item-action bg-light"
            >MyPage</router-link
          >
          <router-link
            to="/mypage/item"
            class="list-group-item list-group-item-action bg-light"
            >MyItem</router-link
          >
          <router-link
            to="/mypage/order"
            class="list-group-item list-group-item-action bg-light"
            >MyOrder</router-link
          >
          <router-link
            to="/mypage/favorite"
            class="list-group-item list-group-item-action bg-light"
            >Favorite</router-link
          >
          <router-link
            to="/mypage/itemregister"
            class="list-group-item list-group-item-action bg-light"
            >RegisterPet</router-link
          >

          <a
            class="list-group-item list-group-item-action bg-light"
            v-on:click="openConfirmDialog = true"
          >
            {{ $t("message.logout") }}
          </a>
        </div>
      </div>
      <loading />
      <div class="container">
      <router-view></router-view>
      </div>
    </div>
    <confirm-dialog
      v-bind:show="openConfirmDialog"
      v-bind:content="{
        title: $t('message.logout'),
        message: $t('message.are_you_sure_you_want_log_out'),
        button: $t('message.logout'),
      }"
      v-on:action="logout"
      v-on:close="openConfirmDialog = false"
    />
  </div>
</template>
<script>
import { ApiClient, UserApi } from "pet_store_api";

export default {
  data: () => ({ openConfirmDialog: false }),
  mounted: function () {
    let userInfo = this.$store.getters['userInfo'];
    if (!userInfo) {
      this.$router.replace("/").catch(() => {});
    }
  },
  methods: {
    async logout() {
      let apiInstance = new UserApi();
      await apiInstance.logout();
      this.confirmDialog = false;
      this.$store.dispatch("saveUserInfo", null);
      localStorage.clear();
      this.$router.replace("/").catch(() => {});
    },
  },
};
</script>
