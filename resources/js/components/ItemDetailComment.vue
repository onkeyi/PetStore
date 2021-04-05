<template>
  <div>
    <div class="d-flex" v-for="(value, key) in comments" :key="key">
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
        <time-ago class="text-muted float-right" locale="jp" :datetime="pet.created_at" long></time-ago>
      </label>
      <button
        type="button"
        class="btn "
        v-show="userInfo && userInfo['user']['id'] == value.user.id"
        v-on:click="deleteComment(value.id)"
      >
        &times;
      </button>
    </div>
    <form class="p-2">
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea
          class="form-control"
          v-model="comment"
          id="comment"
          rows="3"
        ></textarea>
      </div>
      <button class="btn btn-outline-secondary" v-on:click="addComment">
        Add
      </button>
    </form>
  </div>
</template>
<script>
import { PetApi, PetComment } from "pet_store_api";
export default {
  name: "item-detail-comment",
  data: () => ({
    userInfo: null,
    comment: null,
    comments: [],
  }),
  props: ["pet"],
  watch: {
    pet: function (value) {
      this.userInfo = this.$store.getters["userInfo"];
      this.loadData();
    },
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
