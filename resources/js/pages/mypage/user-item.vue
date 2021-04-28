<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body">
                <p>MyItem</p>
            </div>
        </div>
        <div class="row">
            <div v-for="(pet, key) in pets" :key="key" class="col">
                <item-card
                    :pet="pet"
                    detail-link="/mypage/item/detail"
                    @delete="openDialog(pet.id)"
                />
            </div>
        </div>

        <confirm-dialog
            :show="openConfirmDialog"
            :content="{
                title: $t('message.remove_item'),
                message: $t('message.remove_item_now'),
                button: $t('message.remove'),
            }"
            @action="deletePetById(petId)"
            @close="openConfirmDialog = false"
        />
    </div>
</template>
<script>
import { UserApi, PetApi } from "pet_store_api";

export default {
    data: () => ({ pets: [], openConfirmDialog: false, petId: null }),
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            const userApi = new UserApi();
            const pagenation = await userApi.getUserPets();
            this.setData(pagenation);
        },
        setData(pagenation) {
            this.pets = pagenation.data;
            this.total = pagenation ? pagenation.total : 0;
            this.perPage = pagenation ? pagenation.per_page : 0;
            this.links = pagenation ? pagenation.links : [];
        },
        openDialog(petId) {
            this.openConfirmDialog = true;
            this.petId = petId;
        },
        async deletePetById(id) {
            const petApi = new PetApi();
            const result = await petApi.deletePetById(id);
            this.openConfirmDialog = false;
            if (result.ok) {
                this.loadData();
            }
        },
    },
};
</script>
