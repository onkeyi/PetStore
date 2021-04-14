<template>
  <div class="container">
    <item-detail :pet="pet"/>
    <button class="btn btn-sm btn-outline-secondary"  v-on:click="openConfirmDialog = true">Delete</button>
    <confirm-dialog
      v-bind:show="openConfirmDialog"
      v-bind:content="{
        title: $t('message.delete'),
        message: $t('message.delete now'),
        button: $t('message.delete'),
      }"
      v-on:action="removeItem"
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


    async removeItem() {
      let petApi = new PetApi();
      await petApi.deletePetById(this.pet.id);
      this.openConfirmDialog = false;
      this.$router.replace('/mypage/item');
    }
  },
};
</script>
