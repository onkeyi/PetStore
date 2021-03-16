<template>
  <div>
    <ul>
      <li v-for="(value, key) in pet.comments" :key="key">
        {{ value.id }}/{{ value.comment }}
        <button
          v-if="userInfo && userInfo['user']['id'] == value.user_id"
          v-on:click="deleteComment(value.id)"
        >
          Delete
        </button>
      </li>
    </ul>
    <div v-if="userInfo">
      <input v-model="comment" type="text" />
      <button v-on:click="addComment">Add</button>
    </div>
  </div>
</template>
<script>
import { PetApi, PetComment } from "pet_store_api";
export default {
  name: "item-detail-comment",
  data: () => ({
    comment: null,
    userInfo: null,
  }),
  props: ["pet"],
  created: function () {
    this.userInfo = this.$store.getters['userInfo'];
  },
  methods: {
    async addComment() {
      let petApi = new PetApi();
      let petComment = new PetComment();
      petComment.comment = this.comment;
      petComment.pet_id = this.pet.id;
      let opts = {
        petComment: petComment,
      };
      await petApi.addNewPetComment(opts);
      this.pet.comments = await petApi.getPetComments(this.pet.id);
    },
    async deleteComment(id) {
      let petApi = new PetApi();
      await petApi.deletePetCommentById(id);
      this.pet.comments = await petApi.getPetComments(this.pet.id);
    },
  },
};
</script>
