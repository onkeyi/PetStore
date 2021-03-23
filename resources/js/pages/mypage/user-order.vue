<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body"><p>Orders</p></div>
    </div>
    <div class="row">
      <div class="col" v-for="(order, key) in orders" :key="key">
        <div
          class="card mb-4 h-md-150 text-decoration-none"
          style="width: 18rem"
        >
          <div class="row bg-light">
            <div class="col float-right m-1">
              <button
                type="button"
                class="close"
                v-on:click="deleteOrderById(order.id)"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <img
            class="card-img-top"
            style="width: 100%; height: 250px"
            v-bind:src="'/storage/pets/' + order.pet.photo_urls[0]"
            data-holder-rendered="true"
          />
          <div class="card-body">
            <strong class="card-title">{{ order.status }}</strong>
            <strong class="card-title">{{ order.ship_date }}</strong>
            <div class="card-subtitle">{{ order.pet.name }}</div>
            <p class="card-text mb-auto">
              {{ order.pet.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserApi, OrderApi } from "pet_store_api";
export default {
  name: "my-order",
  data: () => ({ orders: [] }),
  mounted: function () {
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
