<template>
  <div class="card mb-4 h-md-150 text-decoration-none" style="min-width: 15rem;">
    <img
      class="bd-placeholder-img  card-img img-fluid"
      :src="'/storage/pets/' + pet.photo_urls[0]"
      height="150"
    />
    <router-link :to="{ path:detailLink, query: { id: pet.id } }">
      <div class="card-img-overlay">
        <div class="float-left">{{ pet.status }}</div>
        <span class="float-right">{{ pet.category.name }}</span>
      </div>
    </router-link>
    <div class="card-body">
      <h5 class="card-title">{{ pet.name.length > 25 ? pet.name.substr(0,25) : pet.name  }}</h5>
      <p class="card-text">
        {{ pet.description.length > 30 ? pet.description.substr(0,30) + '...' : pet.description }}
      </p>
      <time-ago class="float-right" locale="jp" :datetime="pet.updated_at" long></time-ago>
      <p>comment:{{ pet.comments_count }}</p>
      <span
        class="badge badge-primary mr-2"
        v-for="(tag, key) in pet.tags.slice(0, 5)"
        :key="key"
        >#{{ tag }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "item-card",
  props: ["pet", "delete","detailLink",'order'],
  mounted: function () {},
};
</script>
