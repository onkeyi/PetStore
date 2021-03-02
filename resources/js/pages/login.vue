<template>
  <div class="container">
    <OtherPageHeader></OtherPageHeader>
    <div class="m-5">
      <form @submit="onSubmit" >
        <p class="h4 text-center mb-4">Sign in</p>
        <label for="defaultFormLoginEmailEx" class="grey-text"
          >Your email</label
        >
        <input
          type="email"
          name="email"
          v-model.trim="email"
          class="form-control"
          required
        />
        <br />
        <label for="defaultFormLoginPasswordEx" class="grey-text"
          >Your password</label
        >
        <input
          type="password"
          v-model.trim="password"
          class="form-control"
          required
        />
        <br />
        <p v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</p>
        <div class="text-center mt-4">
          <button class="btn btn-sm btn-outline-secondary" @click="onSubmit" type="submit">
            Login
          </button>
          <router-link class="btn btn-sm btn-outline-secondary" to="/register">
            Register
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ApiClient, UserApi, RequestAuthLogin } from "pet_store_api";

export default {
  data: function () {
    return {
      email: null,
      password: null,
      errorMessage: null,
    };
  },
  methods: {
    onSubmit(event) {
      let opts = new RequestAuthLogin(this.email, this.password);
      let apiInstance = new UserApi();
      apiInstance.login(
        { requestAuthLogin: opts }).then((data)=> {
          this.accessToken = data.token;
          localStorage.setItem("accessToken", data.token);
          this.$router.push("/");
        },error =>{
            this.errorMessage = error.message;
        });
    },
  },
};
</script>
