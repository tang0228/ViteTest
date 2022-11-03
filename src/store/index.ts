import { defineStore } from "pinia"

export const userStore = defineStore('user', {
    state: () => {
        return {
            userInfo: {
                name: 'tyq',
                age: 21
            },
        }
    },
})

