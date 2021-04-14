<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body"><p>Orders</p></div>
    </div>
    <div class="row">
      <div class="col" v-for="(order, key) in orders" :key="key">
          <item-card v-bind:pet="order.pet"  detailLink="/mypage/order/detail/" />
      </div>
  </div>
</div>
</template>
<script>
import { UserApi, OrderApi } from "pet_store_api";
export default {

  data: () => ({ orders: [] }),
  created: function () {
    this.loadData();
  },
  methods: {
    async loadData() {
      let userApi = new UserApi();
      const pagenation = await userApi.getUserOrders();
      this.setData(pagenation);
    },

    async deleteOrderById(id) {
      let orderApi = new OrderApi();
      let result = await orderApi.deleteOrderById(id);

      if (result.ok) {
        this.loadData();
      }
    },
    setData(pagenation) {
      this.orders = pagenation ? pagenation.data : [];
      this.total = pagenation ? pagenation.total : 0;
      this.perPage = pagenation ? pagenation.per_page : 0;
      this.links = pagenation ? pagenation.links : [];
    },
  },
};
</script>
