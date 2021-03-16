<template>
  <div>
    <ul>
      <li v-for="(value,key) in orders" :key="key">id:{{ value.pet.id}} / {{ value.pet.name }} / {{value.status}} /{{value.pet.status}}
      <button v-on:click="deleteOrderById(value.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { UserApi,OrderApi } from "pet_store_api";
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

    async deleteOrderById(id) {
      let orderApi = new OrderApi();
      let result = await orderApi.deleteOrderById(id);

      if (result.ok) {
        this.loadData();
      }
    }
  },
};
</script>
