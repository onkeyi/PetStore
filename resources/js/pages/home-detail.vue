<template>
  <div class="container">
    <item-detail :pet="pet"/>
    <div class="col-12" v-show="pet && userId && pet.owner.id != userId">
      <a
        v-if="pet.status == 'available'"
        class="btn btn-sm btn-outline-secondary"
        v-on:click="openConfirmDialog = true"
        >Order</a
      >
      <a class="btn btn-sm btn-outline-secondary" v-on:click="addFavorite"
        >♡</a
      >
    </div>
    <div class="alert alert-info" v-if="errorMessage">{{ errorMessage }}</div>
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

  data: () => ({
    pet: {},
    openConfirmDialog: false,
    errorMessage: null,
    userId:null
  }),
  watch: {
    "$route.params.id": {
      handler: function () {
        this.fetchData();
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    async fetchData() {
      const petId = this.$route.query.id;
      if (!petId) return;

      let petApi = new PetApi();
      this.pet = await petApi.getPetById(petId);

      if (this.pet.status !== "available") {
      }
      this.userId = this.$store.getters['userInfo'] ? this.$store.getters['userInfo']['user']['id'] : null;
    },

    order() {
      let orderApi = new OrderApi();
      let opts = {
        requestOrderStore: new RequestOrderStore(this.pet.id),
      };

      orderApi.addNewOrder(opts).then(
        (data) => {
          this.openConfirmDialog = false;
          this.pet.status = "pending";
        },
        (error) => {
          this.openConfirmDialog = false;
          this.errorMessage = error.message;
        }
      );
    },

    addFavorite() {
      let userApi = new UserApi();

      userApi.updateUserFavorite(this.pet.id).then(
        (data) => {

        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
    },

    removeFavorite() {
      let userApi = new UserApi();
      userApi.updateUserFavorite(this.pet.id).then(
        (data) => {},
        (error) => {
          this.errorMessage = error.message;
        }
      );
    },
  },
};
</script>
