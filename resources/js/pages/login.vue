<template>
    <div class="container">
        <header class="store-header py-3">
            <div
                class="row flex-nowrap justify-content-between align-items-center"
            >
                <div class="col-4 pt-1">
                    <router-link
                        class="store-header-logo text-dark"
                        :to="{ path: '/' }"
                    >
                        {{ $appName }}
                    </router-link>
                </div>
            </div>
        </header>
        <div class="m-5">
            <p class="h4 text-center mb-4">Log in</p>
            <label for="defaultFormLoginEmailEx" class="grey-text"
                >Your email</label
            >
            <input
                v-model.trim="email"
                type="email"
                name="email"
                class="form-control"
                required
            />
            <br />
            <label for="defaultFormLoginPasswordEx" class="grey-text"
                >Your password</label
            >
            <input
                v-model.trim="password"
                type="password"
                class="form-control"
                required
            />
            <br />
            <p v-if="errorMessage" class="alert alert-danger">
                {{ errorMessage }}
            </p>
            <div class="text-center mt-4">
                <button
                    class="btn btn-sm btn-outline-secondary"
                    type="submit"
                    @click="onSubmit"
                >
                    {{ $t("message.login") }}
                </button>
                <router-link
                    class="btn btn-sm btn-outline-secondary"
                    to="/register"
                >
                    {{ $t("message.register") }}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { UserApi, RequestAuthLogin } from "pet_store_api";

export default {
    data() {
        return {
            email: null,
            password: null,
            errorMessage: null,
        };
    },
    methods: {
        onSubmit() {
            if (!this.email) {
                this.errorMessage = "メルアドレスを入力してください。";
                return;
            }
            if (!this.validEmail(this.email)) {
                this.errorMessage = "正しいメルアドレスを入力してください。";
                return;
            }
            if (!this.password) {
                this.errorMessage = "パスワードを入力してください。";
                return;
            }

            const opts = new RequestAuthLogin(this.email, this.password);
            const apiInstance = new UserApi();
            apiInstance.login({ requestAuthLogin: opts }).then(
                (data) => {
                    this.$store.commit("userInfo", data);
                    // this.$router.push("/").catch(() => {});
                    location.href = "/";
                },
                (error) => {
                    this.errorMessage =
                        "ログイン失敗しました。" + error.body
                            ? error.body.message
                            : error.message;
                }
            );
        },
        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
};
</script>
