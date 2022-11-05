<template>
  <div>
    <p>Child Component</p>
    <p>{{userInfo.name}}</p>
    <p>{{userInfo.age}}</p>
  </div>
</template>

<script lang='ts' setup>
import { useUserStore } from "@/store/user"
import { reactive } from "vue"
const userStore = useUserStore()
const userInfo = reactive(userStore)
</script>
<style scoped lang="scss">
p {
    margin: 16px 0;
}
</style>