<template>
  <router-link :to="{path:'/detail',query:{id:pet.id}}" class="card mb-4 h-md-150" style="min-width: 18rem">
    <svg
      class="bd-placeholder-img card-img-top"
      width="100%"
      height="180"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
      aria-label="Placeholder: Image cap"
    >
      <title>{{ pet.status }}</title>
      <rect fill="#868e96" width="100%" height="100%" />
      <text fill="#dee2e6" dy=".3em" x="50%" y="50%">{{pet.status}}</text>
    </svg>
    <div class="card-body">
      <h5 class="card-title">{{ pet.category.name }}</h5>
      <p class="card-text">
        {{ pet.description }}
      </p>
      <span
        class="badge badge-primary"
        v-for="(tag, key) in pet.tags.slice(0, 5)"
        :key="key"
        >{{ tag.name }}</span
      >
    </div>
  </router-link>
</template>
<script>
export default {
  name: "item-list-card",
  props: ["pet"],
  created: function () {},
};
</script>
