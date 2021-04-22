<template>
    <div class="spinner text-center">
        <div
            v-show="$store.getters['isLoading']"
            class="spinner-grow"
            role="status"
        >
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Loading",
};
</script>
<style>
.spinner {
    display: block;
    position: fixed;
    z-index: 1031; /* High z-index so it is on top of the page */
    top: 50%;
    right: 50%; /* or: left: 50%; */
}
</style>
