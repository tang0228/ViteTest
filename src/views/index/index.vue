<template>
    <div class="index-wrap">
        <p>Index Component</p>
        <p>{{ userInfo.name }}</p>
        <p>{{ userInfo.age }}</p>
        <Child />
    </div>
    <button @click="change">修改数据</button>
</template>

<script lang='ts' setup>
import { reactive } from "vue"
import { useUserStore } from "@/store/user"
import { storeToRefs } from "pinia"
import Child from "./components/Child.vue"
const userStore = useUserStore()
const userInfo = storeToRefs(userStore)
console.log(userStore);


const change = () => {
    userStore.name = 'abc'
    console.log(userStore);
}

</script>
<style scoped lang="scss">
$size-16: 16px;
$color-blue: blue;

.index-wrap {
    font-size: $size-16;
    color: $color-blue;
}
p {
    margin: $size-16 0;
}
</style>