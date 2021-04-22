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
        <p class="h4 text-center mb-4">Sign up</p>
        <div class="row m-5">
            <div class="col">
                <label for="defaultFormRegisterNameEx" class="grey-text"
                    >Your name</label
                >
                <input
                    v-model.trim="name"
                    type="text"
                    name="name"
                    class="form-control"
                    required
                />
            </div>

            <label for="defaultFormRegisterEmailEx" class="grey-text"
                >Your email</label
            >
            <input
                v-model.trim="email"
                type="email"
                class="form-control"
                required
            />
            <br />
            <label for="defaultFormRegisterConfirmEx" class="grey-text"
                >Confirm your email</label
            >
            <input
                v-model="emailConfirm"
                type="email"
                class="form-control"
                required
            />
            <br />
            <label for="defaultFormRegisterPasswordEx" class="grey-text"
                >Your password</label
            >
            <input
                v-model.trim="password"
                type="password"
                class="form-control"
                min="6"
                required
            />
            <p v-if="errorMessage" class="alert alert-danger">
                {{ errorMessage }}
            </p>
            <div class="text-center mt-4">
                <button
                    class="btn btn-sm btn-outline-secondary"
                    @click="register"
                >
                    Save
                </button>
            </div>
            <br />
        </div>
    </div>
</template>
<script>
import { UserApi, RequestAuthRegister } from "pet_store_api";

export default {
    data() {
        return {
            name: null,
            email: null,
            emailConfirm: null,
            password: null,
            errorMessage: null,
        };
    },
    methods: {
        register() {
            if (!this.name) {
                this.errorMessage = "名前を入力してください。";
                return;
            }
            if (!this.email) {
                this.errorMessage = "メルアドレスを入力してください。";
                return;
            }
            if (!this.emailConfirm) {
                this.errorMessage = "確認メールアドレスを入力してください。";
                return;
            }
            if (this.email != this.emailConfirm) {
                this.errorMessage = "メールアドレス確認が間違ってます。";
                return;
            }
            if (!this.password) {
                this.errorMessage = "パスワードを入力してください。";
                return;
            }
            if (this.password.length < 6) {
                this.errorMessage = "パスワードを6文字以上入力してください。";
                return;
            }
            const opts = new RequestAuthRegister(
                this.name,
                this.email,
                this.password
            );
            const apiInstance = new UserApi();

            apiInstance.registerNewUser({ requestAuthRegister: opts }).then(
                () => {
                    this.$router.replace("/login").catch(() => {});
                },
                (error) => {
                    this.errorMessage = error.body ? error.body.message : error;
                }
            );
        },
    },
};
</script>
