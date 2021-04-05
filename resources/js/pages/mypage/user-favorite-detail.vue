<template>
  <div class="container">
    <item-detail :pet="pet" />
    <div class="col-12">
      <a class="btn btn-sm btn-outline-secondary" v-on:click="removeFavorite"
        >RemoveFavorite</a
      >
    </div>
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

    removeFavorite() {
      let userApi = new UserApi();
      userApi.deleteUserFavoriteByPetId(this.pet.id).then(
        (data) => {
          this.$router.push("/mypage/favorite");
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
    },
  },
};
</script>
