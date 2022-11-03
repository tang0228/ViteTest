<template>
    <div class="index-wrap">
        index
    </div>
</template>

<script lang='ts' setup>
import { userStore } from "@/store"
const state = userStore()
console.log(state, 'state')

</script>
<style scoped lang="sass">
</style>