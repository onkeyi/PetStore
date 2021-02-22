<template>
  <!-- Material form login -->
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <div class="grey-text">
      <input label="Your email" icon="envelope" v-model="email" type="email"/>
      <input label="Your password" icon="lock" v-model='password' type="password"/>
    </div>
    <div class="text-center">
      <button v-on:click="login">Login</button>
    </div>
  </form>
  <!-- Material form login -->
</template>
<script>
import { ApiClient,UserApi,RequestAuthLogin　}　from 'pet_store_api'
export default {
    data: function() {
        return {
                email: null,
                password: null
        }
    },
     methods: {
        login: function() {
        let opts = new RequestAuthLogin(this.email,this.password)
        let apiInstance = new UserApi();
        let that = this;
console.log(opts);
        apiInstance.login({'requestAuthLogin':opts},function(error,data,response) {
            if (error) {
                that.errorMessage = error.message;
                return;
            }
            console.log('login success.');
            that.accessToken = data.token;
            localStorage.token = data.token;
        });
        }
    }
}
</script>
