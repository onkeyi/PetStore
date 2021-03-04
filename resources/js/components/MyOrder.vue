<template>
  <div>
    {{ orders }}
  </div>
</template>
<script>
import { UserApi } from "pet_store_api";
export default {
  name: "MyOrder",
  data: () => ({ orders: [] }),
  mounted: function () {
    this.loadData();
  },
  methods: {
    loadData() {
      let userApi = new UserApi();
      userApi.getUserOrders().then((data) => {
        this.orders = data;
      },error => { console.log(error)});
    },
  },
};
</script>
