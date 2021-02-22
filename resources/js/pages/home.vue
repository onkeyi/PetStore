<template>
<div>
    <p>HOME {{ errorMessage }}</p>
    <p>Token{{ accessToken }}</p>
    <vue-loading v-if="showLoading" type="spin" color="#333" :size="{ width: '50px', height: '50px' }"></vue-loading>
<ul id="example-1">
  <li v-for="item in pets" >
    {{ item.name }}
  </li>
</ul>
</div>
</template>
<script>

import { UserApi,ApiClient,RequestAuthLogin,PetApi } from 'pet_store_api';

export default {
    data: () => ({
        errorMessage : '',
        accessToken  : '',
        pets: null,
        showLoading : false,
        petApi: null
    }),
    created: function () {
        this.showLoading = true;
        // let opts = new RequestAuthLogin("mikako29@example.com","password")
        // let apiInstance = new UserApi();
        let that = this;
        // apiInstance.login({'requestAuthLogin':opts},function(error,data,response) {
        //     if (error) {
        //         that.errorMessage = error.message;
        //         return;
        //     }
        //     that.accessToken = data.token;
        //     localStorage.token = data.token;
        // });
        // let bearer = defaultClient.authentications['bearer'];
        // bearer.accessToken = localStorage.token

        this.petApi = new PetApi();
        this.petApi.getAllPets((error,data,response) =>{
            that.pets = data.data;
            that.showLoading = false;
        });
    },
    watch: {
        // ルートが変更されたらこのメソッドを再び呼び出します
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            console.log('fetchData');
            this.error = this.post = null
            this.loading = true
            let opts = {
                'category':  this.$route.query.category
            };

            let that = this;
            this.petApi.findPetByCategory(opts, (error, data, response) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(data);
                    that.pets = data.data;
                }
            });

        }
    }
}
</script>
