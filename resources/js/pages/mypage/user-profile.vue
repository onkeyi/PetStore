<template>
    <div class="panel panel-default">
        <div class="panel-body text-center">
            <div class="p-3 border">
                <img
                    v-if="user && user.avatar"
                    class="rounded-circle"
                    :src="'/storage/users/' + user.avatar"
                    style="cursor: pointer"
                    width="80"
                    height="80"
                    @click="select"
                />
                <input ref="file" type="file" hidden @change="selectedFile" />
            </div>
            <p class="mt-2">{{ user.name }}({{ user.id }})10</p>
            <p class="mt-2">
                {{ user.gender }}
            </p>
            <p class="mt-2">
                {{ user.birthday }}
            </p>
            <p class="mt-2">
                {{ user.address }}
            </p>
            <p class="mt-2">
                {{ user.phone }}
            </p>
            <p class="mt-2">
                {{ user.phone }}
            </p>
        </div>
    </div>
</template>
<script>
import { UserApi } from "pet_store_api";

export default {
    data: () => ({ user: {} }),
    created() {
        this.loadData();
    },
    methods: {
        select() {
            const fileInputElement = this.$refs.file;
            fileInputElement.click();
        },
        async selectedFile(e) {
            e.preventDefault();
            const { files } = e.target;
            const uploadFile = files[0];
            const userApi = new UserApi();
            const data = await userApi.uploadAvatarImage({ image: uploadFile });
            if (this.user) {
                this.user.avatar = data.file_name;
            }
        },
        loadData() {
            const userApi = new UserApi();
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
