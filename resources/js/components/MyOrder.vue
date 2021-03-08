<template>
  <div>
    <ul>
      <li v-for="(value,key) in orders" :key="key">id:{{ value.pet.id}} / {{ value.pet.name }} / {{value.status}} /{{value.pet.status}}</li>
    </ul>
  </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  name: "my-order",
  data: () => ({ orders: [] }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    async loadData() {
      let userApi = new UserApi();
      this.orders = await userApi.getUserOrders();
    },
  },
};
</script>
