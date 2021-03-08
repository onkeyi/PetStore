<template>
<div>
<ul>
    <li v-for="(value,key) in comments" :key="key">{{value.comment}}</li>
</ul>
</div>
</template>
<script>
export default {
    name:'item-detail-comment',
    props:['comments']
}
</script>