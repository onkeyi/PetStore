<template>
  <div>
    {{ user.name }}
  </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  name: "my-info",
  data: () => ({ user: {} }),
  created: function () {
    this.loadData();
  },
  methods: {
    loadData() {
      let userApi = new UserApi();

      userApi.getUser().then(data =>{ this.user = data},error=>{
        if (error.status === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userId");
          this.$router.replace("/").catch(() => {});
        }
      })
    },
  },
};
</script>
