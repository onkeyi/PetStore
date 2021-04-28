<template>
    <div class="container">
        <item-detail :pet="pet" />
        <div class="col-12">
            <a class="btn btn-sm btn-outline-secondary" @click="removeFavorite"
                >RemoveFavorite</a
            >
        </div>
    </div>
</template>

<script>
import { PetApi, UserApi } from "pet_store_api";

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

        removeFavorite() {
            const userApi = new UserApi();
            userApi.updateUserFavorite(this.pet.id).then(
                () => {
                    this.$router.push("/mypage/favorite");
                },
                (error) => {
                    this.errorMessage = error.message;
                }
            );
        },
    },
};
</script>
