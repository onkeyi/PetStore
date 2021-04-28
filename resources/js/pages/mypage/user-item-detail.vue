<template>
    <div class="container">
        <item-detail :pet="pet" />
        <button
            class="btn btn-sm btn-outline-secondary"
            @click="openConfirmDialog = true"
        >
            Delete
        </button>
        <confirm-dialog
            :show="openConfirmDialog"
            :content="{
                title: $t('message.delete'),
                message: $t('message.delete now'),
                button: $t('message.delete'),
            }"
            @action="removeItem"
            @close="openConfirmDialog = false"
        />
    </div>
</template>

<script>
import { PetApi } from "pet_store_api";

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

        async removeItem() {
            const petApi = new PetApi();
            await petApi.deletePetById(this.pet.id);
            this.openConfirmDialog = false;
            this.$router.replace("/mypage/item");
        },
    },
};
</script>
