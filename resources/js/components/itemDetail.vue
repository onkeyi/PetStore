<template>
  <div>
    <h1 class="my-4">
      ID:{{ pet.id }} / {{ pet.name }} / {{ pet.status }}
      <small>{{ pet.status }}</small>
    </h1>
    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-6">
        <img
          style="width: 400px"
          class="img-fluid"
          :src="'/storage/pets/' + pet.photo_urls[0]"
          alt=""
        />
      </div>

      <div class="col-md-6">
        <h3 class="my-3">Description</h3>
        <p>{{ pet.description }}</p>
        <h3 class="my-3">Tag</h3>
        <ul>
          <li v-for="(tag, key) in pet.tags" :key="key">#{{ tag }}</li>
        </ul>
      </div>
    </div>
    <h3 class="my-2">Related</h3>

    <div class="row">
      <div
        class="col-md-6 col-sm-12 mb-4"
        v-for="(url, key) in pet.photo_urls"
        :key="key"
      >
        <a href="#">
          <img
            class="img-fluid img-thumbnail"
            :src="'/storage/pets/' + url"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "item-detail",
  props: ["pet"],
  data: () => ({
    pet: {},
  }),
};
</script>
