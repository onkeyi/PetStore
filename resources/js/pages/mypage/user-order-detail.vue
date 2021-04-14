<template>
  <div class="container">
    <item-detail :pet="pet"/>
    <!-- /.row -->
    <button class="btn btn-sm btn-outline-secondary"  v-on:click="openConfirmDialog = true">Delete</button>
    <div class="my-5">comment: {{ pet.comments_count }}</div>
    <item-detail-comment v-show="$store.getters['userInfo']" :pet="pet" />
    <confirm-dialog
      v-bind:show="openConfirmDialog"
      v-bind:content="{
        title: $t('message.order'),
        message: $t('message.order now'),
        button: $t('message.order'),
      }"
      v-on:action="deleteOrder"
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
          this.errorMessage = error.message;
        }
      );
    },
    async deleteOrder() {
      let petApi = new PetApi();
      petApi.deleteOrderByPetId(this.pet.id).then(
        (data) => {
          this.openConfirmDialog = false;
          this.$router.replace('/mypage/order');
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
    },
  },
};
</script>
