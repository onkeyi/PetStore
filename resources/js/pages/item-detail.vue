<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Portfolio Item Heading -->
    <h1 class="my-4">
      ID:{{ pet.id }} / {{ pet.name }} / {{ pet.status }}
      <small>{{ pet.status }}</small>
    </h1>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-8">
        <img class="img-fluid" src="http://placehold.it/750x500" alt="" />
      </div>

      <div class="col-md-4">
        <h3 class="my-3">Description</h3>
        <p>{{ pet.description }}</p>
        <h3 class="my-3">Details</h3>
        <ul>
          <li v-for="(tag, key) in pet.tags" :key="key">{{ tag }}</li>
        </ul>
      </div>
    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4">Related</h3>

    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>

      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
        </a>
      </div>
      <div v-show="$store.getters['userInfo']">
        <a
          v-if="pet.status == 'available'"
          class="btn btn-sm btn-outline-secondary"
          v-on:click="openConfirmDialog = true"
          >Order</a
        >
        <a class="btn btn-sm btn-outline-secondary" v-on:click="addFavorite"
          >Favorite</a
        >
      </div>
    </div>
    <!-- /.row -->
    <p>comment: {{pet.comments_count}}</p>
    <item-detail-comment :pet="pet" />
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
</template>

<script>
import {
  PetApi,
  OrderApi,
  RequestOrderStore,
  UserApi,
  RequestFavoriteStore,
} from "pet_store_api";

export default {
  name: "item-detail",
  data: () => ({
    pet: {},
    openConfirmDialog: false,
    errorMessage: null,
  }),
  // watch: {
  //   "$route.params.id": {
  //     handler: function () {
  //       this.fetchData();
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      const petId = this.$route.query.id;
      if (!petId) return;

      let petApi = new PetApi();
      this.pet = await petApi.getPetById(petId);

      if (this.pet.status !== "available") {

      }
    },

    order() {
      let orderApi = new OrderApi();
      let opts = {
        requestOrderStore: new RequestOrderStore(this.pet.id),
      };

      orderApi.addNewOrder(opts).then(
        (data) => {
          this.openConfirmDialog = false;
          this.pet.status = 'pending';
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
    },

    addFavorite() {
      let userApi = new UserApi();
      const opts = {
        requestFavoriteStore: new RequestFavoriteStore(this.pet.id),
      };
      userApi.addNewUserFavorite(opts).then(
        (data) => {},
        (error) => {
          this.errorMessage = error.message;
        }
      );
    },

    removeFavorite() {
      let userApi = new UserApi();
      userApi.deleteUserFavoriteByPetId(this.pet.id).then(
        (data) => {},
        (error) => {
          this.errorMessage = error.message;
        }
      );
    },
  },
};
</script>
