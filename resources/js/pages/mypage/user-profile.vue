<template>
    <div >
        <div class="p-3 border bg-light">{{ user.name }}</div>
    </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  data: () => ({ user: {} }),
  created: function () {
    this.loadData();
  },
  methods: {
    loadData() {
      let userApi = new UserApi();

      userApi.getUser().then(
        (data) => {
          this.user = data;
        },
        (error) => {
          if (error.status === 401) {
            localStorage.clear();
            this.$router.replace("/").catch(() => {});
          }
        }
      );
    },
  },
};
</script>
