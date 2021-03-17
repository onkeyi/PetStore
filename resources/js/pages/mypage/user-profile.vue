<template>
    <div >
        <div class="p-3 border bg-light">{{ user.name }}</div>
        <img v-if="user && user.avatar" v-bind:src="'/storage/users/' + user.avatar" style="width:50px;height:50px;border-radius:25px;" />
        <input v-on:change="selectedFile" type="file" name="file" />
    </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  data: () => ({ user: {} }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    async selectedFile(e) {
      e.preventDefault();
      let files = e.target.files;
      let uploadFile = files[0];
      let userApi = new UserApi();
      let data = await userApi.uploadAvatarImage({ image: uploadFile });
      if (this.user) {
        this.user.avatar = data.file_name;
      }
    },
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
