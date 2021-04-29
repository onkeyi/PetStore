<template>
    <div>
        <div v-for="(value, key) in comments" :key="key" class="d-flex">
            <div class="p-2">
                <img
                    :src="'/storage/users/' + value.user.avatar"
                    alt="user"
                    width="40"
                    class="rounded-circle"
                />
            </div>
            <label class="flex-grow-1 align-items-center border p-2 rounded">
                <div class="m-b-15 d-block">{{ value.comment }}</div>
                <time-ago
                    class="text-muted float-right"
                    locale="jp"
                    :datetime="pet.created_at"
                    long
                />
            </label>
            <button
                v-show="userInfo && userInfo['user']['id'] == value.user.id"
                type="button"
                class="btn"
                @click="deleteComment(value.id)"
            >
                &times;
            </button>
        </div>
        <form class="p-2">
            <div class="form-group">
                <label for="comment">Comment</label>
                <textarea
                    id="comment"
                    v-model="comment"
                    class="form-control"
                    rows="3"
                />
            </div>
            <button class="btn btn-outline-secondary" @click="addComment">
                Add
            </button>
        </form>
    </div>
</template>
<script>
import { PetApi, PetComment } from "pet_store_api";

export default {
    name: "item-detail-comment",
    props: ["pet"],
    data: () => ({
        userInfo: null,
        comment: null,
        comments: [],
    }),
    watch: {
        pet() {
            this.userInfo = this.$store.getters.userInfo;
            this.loadData();
        },
    },
    methods: {
        async loadData() {
            const petApi = new PetApi();
            const pagenation = await petApi.getPetComments(this.pet.id);

            this.setData(pagenation);
        },
        async addComment() {
            const petApi = new PetApi();
            const petComment = new PetComment();
            petComment.comment = this.comment;
            petComment.pet_id = this.pet.id;
            const opts = {
                petComment,
            };
            await petApi.addNewPetComment(opts);
            this.loadData();
        },
        async deleteComment(id) {
            const petApi = new PetApi();
            await petApi.deletePetCommentById(id);
            this.loadData();
        },
        setData(pagenation) {
            this.comments = pagenation.data;
            this.total = pagenation ? pagenation.total : 0;
            this.perPage = pagenation ? pagenation.per_page : 0;
            this.links = pagenation ? pagenation.links : [];
        },
    },
};
</script>
