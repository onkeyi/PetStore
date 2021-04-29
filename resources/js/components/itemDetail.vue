<template>
    <div>
        <h1 class="my-4">
            {{ pet.name }}
            <small>{{ pet.status }}</small>
        </h1>
        <div class="row">
            <div class="col-md-5">
                <img
                    v-if="pet.photo_urls"
                    style="width: 400px"
                    class="img-fluid"
                    :src="topImage"
                    alt=""
                />
            </div>
            <div class="col-md-1">
                <a
                    v-for="(url, key) in pet.photo_urls"
                    :key="key"
                    href="#"
                    @click="changeImage(url)"
                >
                    <img
                        class="img-fluid img-thumbnail"
                        style="min-width: 40px"
                        :src="'/storage/pets/' + url"
                        alt=""
                    />
                </a>
            </div>
            <div class="col-md-6">
                <h3 class="my-3">詳細</h3>
                <p>{{ pet.description }}</p>
                <h3 class="my-3">タグ</h3>
                <ul>
                    <li v-for="(tag, key) in pet.tags" :key="key">
                        #{{ tag }}
                    </li>
                </ul>
            </div>
        </div>
        <item-detail-comment :pet="pet" />
    </div>
</template>
<script>
export default {
    name: "item-detail",
    props: ["pet"],
    data: () => ({
        topImage: null,
    }),
    watch: {
        pet() {
            this.topImage = `/storage/pets/${this.pet.photo_urls[0]}`;
        },
    },
    methods: {
        changeImage(imgUrl) {
            this.topImage = `/storage/pets/${imgUrl}`;
        },
    },
};
</script>
