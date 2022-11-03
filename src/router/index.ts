import { createRouter, createWebHashHistory } from "vue-router"
import Index from "@/views/index/index.vue"
import Other from "@/views/other/index.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: Index,
        meta: {
            title: '首页'
        }
    }, {
        path: '/other',
        component: Other,
        meta: {
            title: '其它'
        }
    }]
})

router.beforeEach((prev, next) => {
    console.log(prev, next);
    
})

export default router