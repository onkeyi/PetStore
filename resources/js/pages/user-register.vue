<template>
  <div class="container">
    <OtherPageHeader></OtherPageHeader>
    <div class="m-5">
      <form>
        <p class="h4 text-center mb-4">Sign up</p>
        <label for="defaultFormRegisterNameEx" class="grey-text"
          >Your name</label
        >
        <input
          type="text"
          name="name"
          v-model.trim="name"
          class="form-control"
          required
        />

        <br />
        <label for="defaultFormRegisterEmailEx" class="grey-text"
          >Your email</label
        >
        <input
          type="email"
          v-model.trim="email"
          class="form-control"
          required
        />
        <br />
        <label for="defaultFormRegisterConfirmEx" class="grey-text"
          >Confirm your email</label
        >
        <input
          type="email"
          v-model="emailConfirm"
          class="form-control"
          required
        />
        <br />
        <label for="defaultFormRegisterPasswordEx" class="grey-text"
          >Your password</label
        >
        <input
          type="password"
          v-model.trim="password"
          class="form-control"
          required
        />
        <div class="text-center mt-4">
          <button class="btn btn-unique" v-on:click="register">Save</button>
        </div>
        <br />
      </form>
    </div>
  </div>
</template>
<script>
import { UserApi, RequestAuthRegister } from "pet_store_api";
export default {
  data: function () {
    return {
      name: null,
      email: null,
      emailConfirm: null,
      password: null,
    };
  },
  methods: {
    register: function () {
      if (this.email != this.emailConfirm) {
        return;
      }
      let opts = new RequestAuthRegister(this.name, this.email, this.password);
      let apiInstance = new UserApi();
      let that = this;

      apiInstance.registerNewUser(
        { requestAuthRegister: opts },
        function (error, data, response) {
          if (error) {
            that.errorMessage = error.message;
            return;
          }
          console.log("login success.");
          that.accessToken = data.token;
          localStorage.token = data.token;
        }
      );
    },
  },
};
</script>
