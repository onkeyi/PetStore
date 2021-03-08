<template>
<!-- Page Content -->
<div class="container">

  <!-- Portfolio Item Heading -->
  <h1 class="my-4">{{pet.name}}
    <small>{{ pet.status }}</small>
  </h1>

  <!-- Portfolio Item Row -->
  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" src="http://placehold.it/750x500" alt="">
    </div>

    <div class="col-md-4">
      <h3 class="my-3">Description</h3>
      <p>{{ pet.description }}</p>
      <h3 class="my-3">Details</h3>
      <ul>
        <li v-for="(tag,key) in pet.tags" :key="key">{{ tag.name }}</li>
      </ul>
    </div>

  </div>
  <!-- /.row -->

  <!-- Related Projects Row -->
  <h3 class="my-4">Related </h3>

  <div class="row">

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>
    <a class="btn btn-sm btn-outline-secondary" v-on:click="openConfirmDialog = true">Order</a>
    <a class="btn btn-sm btn-outline-secondary" v-on:click="favorite">Favorite</a>
  </div>
  <!-- /.row -->
  <item-detail-comment :comments="pet.comments" />
  <confirm-dialog
    v-bind:show="openConfirmDialog"
    v-bind:content="{
      title: $t('message.order'),
      message: $t('message.order now'),
      button: $t('message.order'),
    }"
    v-on:action="order"
    v-on:close="openConfirmDialog = false"
  />
  </div>
</div>
<!-- /.container -->
</template>

<script>
import { PetApi,OrderApi,RequestOrderStore,UserApi,RequestFavoriteStore } from "pet_store_api";

export default {
  name: "item-detail",
  data: () => ({
    pet: {},
    openConfirmDialog: false
  }),

  watch: {
    '$route.params.id': {
        handler: function() {
            this.fetchData();
        },
        deep: true,
        immediate: true
      }
  },

  methods: {
    async fetchData() {
      let petApi = new PetApi();
      const petId = this.$route.query.id;
      this.pet = await petApi.getPetById(petId);
    },
    order() {
      let orderApi = new OrderApi();
      let opts = {
        'requestOrderStore': new RequestOrderStore(this.pet.id,1,'places')
      };

      orderApi.addNewOrder(opts).then(data =>{
        console.log(data);
        this.openConfirmDialog = false;
      },error =>{ console.log(error);});
    },

    favorite() {
console.log('call favorite');
      let userApi = new UserApi();
console.log('call userapi');
      const opts = {
        'requestFavoriteStore': new RequestFavoriteStore(this.pet.id)
      };
console.log(opts);
      userApi.addNewUserFavorite(opts).then(data =>{
        console.log(data);
      },error =>{ console.log(error)});
    }

  },
};
</script>
