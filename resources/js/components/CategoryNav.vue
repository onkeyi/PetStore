<template>
    <div>
        <div class="nav-scroller">
            <ul class="nav">
                <li
                    v-for="(value, key) in topCategories"
                    :key="key"
                    :class="
                        'nav-item ' + (value.id == selectedId ? 'active' : '')
                    "
                    @click="loadSubCategory(value.id, value.parent_id)"
                >
                    <a class="nav-link text-muted" href="#"
                        >{{ value.name | uppercase }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="nav-scroller" v-if="subCategories">
            <ul class="nav">
                <li
                    v-for="(value, key) in subCategories"
                    :key="key"
                    :class="
                        'nav-item ' + (value.id == selectedId ? 'active' : '')
                    "
                    @click="loadSubCategoryData(value.id)"
                >
                    <a class="nav-link text-muted" href="#"
                        >{{ value.name | uppercase }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { CategoryApi } from "pet_store_api";

export default {
    name: "category-nav",
    data: () => ({
        categories: [],
        topCategories: [],
        subCategories: [],
        selectedId: null,
    }),
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            const apiInstance = new CategoryApi();
            this.categories = await apiInstance.getAllCategorys();
            this.categories.forEach((category) => {
                if (category.parent_id == -1) {
                    this.topCategories.push(category);
                }
            });
        },
        loadSubCategory(id, parentId) {
            this.selectedId = id;
            this.subCategories = [];
            if (parentId == -1) {
                this.categories.forEach((category) => {
                    if (category.parent_id == id) {
                        this.subCategories.push(category);
                    }
                });
            }
            if (this.subCategories.length == 0) {
                this.$router.push({ query: { category: id } }).catch(() => {});
            }
        },
        loadSubCategoryData(id) {
            this.$router.push({ query: { category: id } }).catch(() => {});
        },
    },
};
</script>
<style scoped>
.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 0.875rem;
}
</style>
