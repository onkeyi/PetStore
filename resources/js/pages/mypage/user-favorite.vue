<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body">
                <p>Favorite</p>
            </div>
        </div>
        <div class="row">
            <div v-for="(pet, key) in pets" :key="key" class="col">
                <item-card :pet="pet" detail-link="/mypage/favorite/detail" />
            </div>
        </div>
    </div>
</template>
<script>
import { UserApi } from "pet_store_api";

export default {
    data: () => ({
        pets: [],
        total: 0,
        perPage: 0,
        links: null,
    }),
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            const userApi = new UserApi();
            const pagenation = await userApi.getUserFavorites();

            this.setData(pagenation);
        },
        async deleteFavorite(id) {
            const userApi = new UserApi();
            const result = await userApi.deleteUserFavoriteByPetId(id);

            if (result.ok) {
                this.loadData();
            }
        },
        setData(pagenation) {
            this.pets = pagenation.data;
            this.total = pagenation ? pagenation.total : 0;
            this.perPage = pagenation ? pagenation.per_page : 0;
            this.links = pagenation ? pagenation.links : [];
        },
    },
};
</script>
