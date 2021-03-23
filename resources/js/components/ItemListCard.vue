<template>
  <router-link
    :to="{ path: '/detail', query: { id: pet.id } }"
    class="card mb-4 h-md-150 text-decoration-none"
    style="min-width: 18rem"
  >
    <img
      class="card-img"
      v-bind:src="'/storage/pets/' + pet.photo_urls[0]"
      height="180"
    />
    <div class="card-img-overlay">
      <div class="float-left">{{ pet.status }}</div>
      <span class="float-right">{{ pet.category.name }}</span>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ pet.name }}</h5>
      <p class="card-text">
        {{ pet.description }}
      </p>
      <p>comment:{{ pet.comments_count}} </p>
      <span
        class="badge badge-primary mr-2"
        v-for="(tag, key) in pet.tags.slice(0, 5)"
        :key="key"
        >{{ tag }}
      </span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "item-list-card",
  props: ["pet"],
  mounted: function () {

  },
};
</script>
