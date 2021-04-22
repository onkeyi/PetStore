<template>
    <div class="container">
        <item-detail :pet="pet" />
        <!-- /.row -->
        <button
            class="btn btn-sm btn-outline-secondary"
            @click="openConfirmDialog = true"
        >
            Delete
        </button>
        <div class="my-5">comment: {{ pet.comments_count }}</div>
        <item-detail-comment v-show="$store.getters['userInfo']" :pet="pet" />
        <confirm-dialog
            :show="openConfirmDialog"
            :content="{
                title: $t('message.order'),
                message: $t('message.order now'),
                button: $t('message.order'),
            }"
            @action="deleteOrder"
            @close="openConfirmDialog = false"
        />
    </div>
</template>

<script>
import { PetApi, OrderApi, RequestOrderStore } from "pet_store_api";

export default {
    data: () => ({
        pet: {},
        openConfirmDialog: false,
        errorMessage: null,
    }),
    watch: {
        "$route.params.id": {
            handler() {
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

            const petApi = new PetApi();
            this.pet = await petApi.getPetById(petId);
        },

        order() {
            const orderApi = new OrderApi();
            const opts = {
                requestOrderStore: new RequestOrderStore(this.pet.id),
            };

            orderApi.addNewOrder(opts).then(
                () => {
                    this.openConfirmDialog = false;
                    this.pet.status = "pending";
                },
                (error) => {
                    this.errorMessage = error.message;
                }
            );
        },
        async deleteOrder() {
            const petApi = new PetApi();
            petApi.deleteOrderByPetId(this.pet.id).then(
                () => {
                    this.openConfirmDialog = false;
                    this.$router.replace("/mypage/order");
                },
                (error) => {
                    this.errorMessage = error.message;
                }
            );
        },
    },
};
</script>
