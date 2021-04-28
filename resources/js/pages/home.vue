<template>
    <div>
        <div class="d-flex">
            <div v-if="showStatus" class="p-2 mr-auto">
                <div class="btn-group" data-toggle="buttons">
                    <label
                        v-for="(s, key) in status"
                        :key="key"
                        :class="
                            'btn btn-outline-secondary ' +
                            (options == s ? 'active' : '')
                        "
                    >
                        <input
                            v-model="options"
                            class="rating-input"
                            autocomplete="off"
                            type="radio"
                            :value="s"
                            @change="searchByStatus()"
                        />{{ s }} - {{ inventory[s] }}
                    </label>
                </div>
            </div>
            <div v-if="pets && pets.length > 0" class="p-2">
                <div class="btn-group" data-toggle="buttons">
                    <label
                        :class="
                            'btn btn-outline-secondary ' +
                            (orderBy == 'desc' ? 'active' : '')
                        "
                        @click="sort('desc')"
                    >
                        ↑
                    </label>
                    <label
                        :class="
                            'btn btn-outline-secondary ' +
                            (orderBy == 'asc' ? 'active' : '')
                        "
                        @click="sort('asc')"
                    >
                        ↓
                    </label>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="(item, key) in pets" :key="key" class="col">
                    <item-card :pet="item" detail-link="/detail" />
                </div>
            </div>
            <div v-if="pets && pets.length == 0" class="alert alert-info">
                NoData
            </div>
        </div>
        <nav v-if="total >= perPage">
            <ul class="pagination justify-content-center">
                <li
                    v-for="(value, key) in links"
                    :key="key"
                    :class="
                        value.active || value.url === null
                            ? 'page-item disabled'
                            : 'page-item'
                    "
                >
                    <router-link
                        class="page-link"
                        :to="{
                            path: $route.fullPath,
                            query: {
                                page: value.url
                                    ? value.url.split('=')[1]
                                    : null,
                            },
                        }"
                    >
                        {{ value.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import { PetApi, OrderApi } from "pet_store_api";

export default {
    data: () => ({
        accessToken: "",
        pets: null,
        petApi: null,
        total: 0,
        perPage: 0,
        links: [],
        inventory: {},
        options: null,
        orderBy: null,
        status: ["all", "available", "pending", "sold"],
        showStatus: true,
    }),
    watch: {
        $route: "fetchData",
    },
    created() {
        this.petApi = new PetApi();
        this.loadData();
    },
    methods: {
        async loadData() {
            const orderApi = new OrderApi();
            this.inventory = await orderApi.getOrderInventory();
            const queryParams = {
                sort: this.$route.query.sort,
                page: this.$route.query.page,
            };
            const pagenation = await this.petApi.getAllPets(queryParams);
            this.setData(pagenation);
        },
        sort(value) {
            const { category } = this.$route.query;
            const { tag } = this.$route.query;
            const { status } = this.$route.query;
            this.$router.push({
                name: "home",
                query: {
                    status,
                    category,
                    tag,
                    sort: value,
                },
            });
            this.orderBy = value;
        },
        fetchData() {
            this.total = 0;
            this.error = null;
            this.showStatus = true;
            const { category } = this.$route.query;
            const { tag } = this.$route.query;
            const { status } = this.$route.query;
            if (!category && !tag && !status) {
                this.loadData();
                return;
            }

            if (category) {
                this.showStatus = false;
                this.options = "all";
                this.findByCategory(category);
                return;
            }
            if (tag) {
                this.showStatus = false;
                this.options = "all";
                this.findByTag(tag);
            }
            if (status) {
                this.findByStatus(status);
            }
        },
        searchByStatus() {
            if (!this.options || this.options == "all") {
                this.$router.replace({ name: "home" });
                return;
            }
            this.$router.replace(
                { name: "home", query: { status: this.options } },
                () => {}
            );
        },
        async findByCategory(category) {
            const opts = {
                category,
                page: this.$route.query.page,
                sort: this.$route.query.sort,
            };
            const pagenation = await this.petApi.findPetByCategory(opts);
            this.setData(pagenation);
        },

        async findByTag(tags) {
            const opts = {
                tag: tags,
                page: this.$route.query.page,
                sort: this.$route.query.sort,
            };

            const pagenation = await this.petApi.findPetByTag(opts);
            this.setData(pagenation);
        },
        async findByStatus(status) {
            const opts = {
                status,
                page: this.$route.query.page,
                sort: this.$route.query.sort,
            };
            const pagenation = await this.petApi.findPetByStatus(opts);
            this.setData(pagenation);
        },
        setData(pagenation) {
            this.pets = pagenation.data;
            this.total = pagenation ? pagenation.total : 0;
            this.perPage = pagenation ? pagenation.per_page : 0;
            this.links = pagenation ? pagenation.links : [];
            this.$store.commit("setLoading", false);
        },
    },
};
</script>
<style scoped>
.pagination {
    margin-bottom: 4rem;
}
input[type="radio"],
input[type="checkbox"] {
    visibility: hidden;
}
</style>
