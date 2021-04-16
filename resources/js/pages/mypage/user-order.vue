<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body">
                <p>Orders</p>
            </div>
        </div>
        <div class="row">
            <div v-for="(order, key) in orders" :key="key" class="col">
                <item-card
                    :pet="order.pet"
                    detail-link="/mypage/order/detail/"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { UserApi, OrderApi } from "pet_store_api";

export default {
    data: () => ({ orders: [] }),
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            const userApi = new UserApi();
            const pagenation = await userApi.getUserOrders();
            this.setData(pagenation);
        },

        async deleteOrderById(id) {
            const orderApi = new OrderApi();
            const result = await orderApi.deleteOrderById(id);

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
