<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body"><p>MyItem</p></div>
    </div>
    <div class="row">
      <div class="col" v-for="(pet, key) in pets" :key="key">
          <item-list-card v-bind:pet="pet" v-on:delete="openDialog(pet.id)" detailLink="/mypage/item/detail"/>
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
  created: function () {
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
