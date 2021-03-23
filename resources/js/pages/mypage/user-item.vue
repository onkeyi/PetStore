<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body"><p>MyItem</p></div>
    </div>
    <div class="row">
      <div class="col" v-for="(pet, key) in pets" :key="key">
        <div
          class="card mb-4 h-md-150 text-decoration-none"
          style="width: 18rem"
        >
          <div class="row bg-light">
            <div class="col float-right m-1">
              <button
                type="button"
                class="close"
                v-on:click="openDialog(pet.id)"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <img
            class="card-img-top"
            style="width: 100%; height: 250px"
            v-bind:src="'/storage/pets/' + pet.photo_urls[0]"
            data-holder-rendered="true"
          />
          <div class="card-body">
            <strong class="card-title">{{ pet.status }}</strong>
            <div class="card-subtitle">{{ pet.name }}</div>
            <p class="card-text mb-auto">
              {{ pet.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <confirm-dialog
      v-bind:show="openConfirmDialog"
      v-bind:content="{
        title: $t('message.remove_item'),
        message: $t('message.remove_item_now'),
        button: $t('message.remove'),
      }"
      v-on:action="deletePetById(petId)"
      v-on:close="openConfirmDialog = false"
    />
  </div>
</template>
<script>
import { UserApi, PetApi, RequestPetStore } from "pet_store_api";
export default {
  name: "my-item",
  data: () => ({ pets: [], openConfirmDialog: false, petId: null }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    async loadData() {
      let userApi = new UserApi();
      const pagenation = await userApi.getUserPets();
      this.setData(pagenation);
    },
    setData(pagenation) {
      this.pets = pagenation.data;
      this.total = pagenation ? pagenation.total : 0;
      this.perPage = pagenation ? pagenation.per_page : 0;
      this.links = pagenation ? pagenation.links : [];
    },
    openDialog(petId) {
      this.openConfirmDialog = true;
      this.petId = petId;
    },
    async deletePetById(id) {
      let petApi = new PetApi();
      let result = await petApi.deletePetById(id);
      this.openConfirmDialog = false;
      if (result.ok) {
        this.loadData();
      }
    },
  },
};
</script>
