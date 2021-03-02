<template>
<!-- Page Content -->
<div class="container">

  <!-- Portfolio Item Heading -->
  <h1 class="my-4">{{pet.name}}
    <small>{{ pet.status }}</small>
  </h1>

  <!-- Portfolio Item Row -->
  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" src="http://placehold.it/750x500" alt="">
    </div>

    <div class="col-md-4">
      <h3 class="my-3">Description</h3>
      <p>{{ pet.description }}</p>
      <h3 class="my-3">Details</h3>
      <ul>
        <li v-for="(tag,key) in pet.tags" :key="key">{{ tag.name }}</li>
      </ul>
    </div>

  </div>
  <!-- /.row -->

  <!-- Related Projects Row -->
  <h3 class="my-4">Related </h3>

  <div class="row">

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>

    <div class="col-md-3 col-sm-6 mb-4">
      <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
    </div>

  </div>
  <!-- /.row -->

</div>
<!-- /.container -->
</template>

<script>
import { PetApi } from "pet_store_api";

export default {
  name: "PetDetail",
  data: () => ({
    pet: {},
  }),

  watch: {
    '$route.params.id': {
        handler: function() {
            this.fetchData();
        },
        deep: true,
        immediate: true
      }
  },
  methods: {
    fetchData() {
      let petApi = new PetApi();
      const petId = this.$route.query.id;
      petApi.getPetById(petId).then(
        (data) => {
          console.log(data);
          if (Object.keys(data).length === 0) {
            return;
          }
          this.pet = data;
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
};
</script>
