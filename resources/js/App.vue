<template>
    <div class="container">
        <nav-bar />
        <category-nav />
        <main role="main">
            <loading />
            <transition>
                <keep-alive>
                    <router-view v-show="!$store.getters['isLoading']" />
                </keep-alive>
            </transition>
        </main>
        <footer v-show="!$store.getters['isLoading']" class="footer">
            <p>
                {{ $appName }}
                <a href="#">Power</a> by <a href="#">@onkeyi</a>
            </p>
        </footer>
    </div>
</template>

<script>
import { ApiClient } from "pet_store_api";

export default {
    data: () => ({}),

    created() {
        const defaultClient = ApiClient.instance;
        const superdebug = require("./superdebug");
        defaultClient.plugins = [superdebug(this.$log.debug)];
        defaultClient.basePath = `${process.env.MIX_API_URL}/api`;
        const { apiKey } = defaultClient.authentications;
        apiKey.apiKey = process.env.MIX_API_KEY;
        const info = this.$store.getters.userInfo;
        if (info) {
            const { bearer } = defaultClient.authentications;
            bearer.accessToken = info.token;
        }

        this.$router.beforeEach((to, from, next) => {
            this.$store.commit("setLoading", true);
            if (to.name === "my-page" && !this.$store.getters.userInfo)
                next({ name: "login" });
            else next();
        });

        this.$router.afterEach(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.$store.commit("setLoading", false);
        });
    },
};
</script>
<style>
.footer {
    padding: 2.5rem 0;
    color: #999;
    text-align: center;
    background-color: #f9f9f9;
    border-top: 0.05rem solid #e5e5e5;
}

.footer p:last-child {
    margin-bottom: 0;
}
</style>
