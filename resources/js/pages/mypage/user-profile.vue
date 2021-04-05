<template>
    <div class="panel panel-default">
        <div class="panel-body text-center">
          <div class="p-3 border">
          <img class="rounded-circle" v-if="user && user.avatar" v-bind:src="'/storage/users/' + user.avatar" style="cursor: pointer" v-on:click="select" width="80" height="80"/>
          <input ref="file" v-on:change="selectedFile" type="file" hidden/>
          </div>
          <p class="mt-2">{{ user.name }}</p>
          <p class="mt-2">{{ user.gender }}</p>
          <p class="mt-2">{{ user.birthday }}</p>
          <p class="mt-2">{{ user.address }}</p>
          <p class="mt-2">{{ user.phone }}</p>
          <p class="mt-2">{{ user.phone }}</p>
        </div>
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
    select() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
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
