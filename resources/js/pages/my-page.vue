<template>
  <div>
    <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="list-group list-group-flush">
          <div class="sidebar-heading">Start Bootstrap </div>
          <router-link
            to="/mypage/profile"
            class="list-group-item list-group-item-action bg-light"
            >MyPage</router-link>
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
      <div class="p-3 flex-grow-1" id="page-content-wrapper">
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
  created: function () {
    let userInfo = this.$store.getters["userInfo"];
    if (!userInfo) {
      this.$router.push("/").catch(() => {});
    }
  },
  methods: {
    async logout() {
      let apiInstance = new UserApi();
      await apiInstance.logout();
      this.confirmDialog = false;
      this.$store.commit("userInfo", null);
      localStorage.clear();
      location.href = "/";
    },
  },
};
</script>
<style scoped>

 #wrapper {
    overflow-x: hidden;
 }

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>