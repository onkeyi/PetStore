<template>
  <div class="container">
    <header class="store-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <router-link
            class="store-header-logo text-dark"
            v-bind:to="{ path: '/' }"
          >
            {{ $appName }}
          </router-link>
        </div>
        <a
          class="btn btn-sm btn-outline-secondary"
          v-on:click="openConfirmDialog = true"
        >
          {{ $t("message.logout") }}
        </a>
      </div>
    </header>
    <div>
      <p>USER</p>
      <my-info />
      <my-item />
      <p>ORDER:</p>
      <my-order />
      <p>Favorites:</p>
      <my-favorite />
      <p>Register:</p>
      <item-register />
    </div>
    {{ $t("message.mypage") }}
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
  created: function () {
    let token = localStorage.getItem("accessToken");
    if (!token) {
      this.$router.replace("/").catch(() => {});
    } else {
      let defaultClient = ApiClient.instance;
      let bearer = defaultClient.authentications["bearer"];
      bearer.accessToken = token;
    }
  },
  methods: {
    async logout() {
      let apiInstance = new UserApi();
      await apiInstance.logout();
      this.confirmDialog = false;
      localStorage.removeItem("accessToken");
      this.$router.replace("/").catch(() => {});
    },
  },
};
</script>
