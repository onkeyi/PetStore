<template>
<div>
  <div class="d-flex flex-row row" v-for="(value, key) in comments" :key="key">
      <div class="p-2"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg" alt="user" width="50" class="rounded-circle"></div>
      <div class="comment-text active w-100">
          <h6 class="font-medium">{{ value.user_id }}</h6> <span class="m-b-15 d-block">{{value.comment}}</span>
          <div class="comment-footer"> <span class="text-muted float-right">{{ value.created_at}}</span> <button type="button" class="btn btn-cyan btn-sm">Edit</button> <button type="button" class="btn btn-success btn-sm">Publish</button> <button type="button"   v-if="userInfo && userInfo['user']['id'] == value.user_id"
          v-on:click="deleteComment(value.id)" class="btn btn-danger btn-sm">Delete</button> </div>
      </div>
  </div>
</div>
</template>
<script>
import { PetApi, PetComment } from "pet_store_api";
export default {
  name: "item-detail-comment",
  data: () => ({
    userInfo: null,
    comment: null,
    comments:[],
  }),
  props: ["pet"],
  watch: {
    pet: function (value) {
      this.userInfo = this.$store.getters['userInfo'];
      this.loadData();
    }
  },
  methods: {
    async loadData() {
      let petApi = new PetApi();
      const pagenation = await petApi.getPetComments(this.pet.id);
      this.setData(pagenation);
    },
    async addComment() {
      let petApi = new PetApi();
      let petComment = new PetComment();
      petComment.comment = this.comment;
      petComment.pet_id = this.pet.id;
      let opts = {
        petComment: petComment,
      };
      await petApi.addNewPetComment(opts);
      this.loadData();
    },
    async deleteComment(id) {
      let petApi = new PetApi();
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
