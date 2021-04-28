<template>
    <div class="container">
        <item-detail :pet="pet" />
        <div v-show="pet && userId && pet.owner.id != userId" class="col-12">
            <a
                v-if="pet.status == 'available'"
                class="btn btn-sm btn-outline-secondary"
                @click="openConfirmDialog = true"
                >Order</a
            >
            <a class="btn btn-sm btn-outline-secondary" @click="addFavorite"
                >♡</a
            >
        </div>
        <div v-if="errorMessage" class="alert alert-info">
            {{ errorMessage }}
        </div>
        <confirm-dialog
            :show="openConfirmDialog"
            :content="{
                title: $t('message.order'),
                message: $t('message.order now'),
                button: $t('message.order'),
            }"
            @action="order"
            @close="openConfirmDialog = false"
        />
    </div>
</template>

<script>
import { PetApi, OrderApi, RequestOrderStore, UserApi } from "pet_store_api";

export default {
    data: () => ({
        pet: {},
        openConfirmDialog: false,
        errorMessage: null,
        userId: null,
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

            this.userId = this.$store.getters.userInfo
                ? this.$store.getters.userInfo.user.id
                : null;
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
                    this.openConfirmDialog = false;
                    this.errorMessage = error.message;
                }
            );
        },

        addFavorite() {
            const userApi = new UserApi();

            userApi.updateUserFavorite(this.pet.id).then(
                () => {},
                (error) => {
                    this.errorMessage = error.message;
                }
            );
        },

        removeFavorite() {
            const userApi = new UserApi();
            userApi.updateUserFavorite(this.pet.id).then(
                () => {},
                (error) => {
                    this.errorMessage = error.message;
                }
            );
        },
    },
};
</script>
