import { createRouter, createWebHistory } from "vue-router";
import Posts from "../views/Posts.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/posts",
            name: "posts",
            component: Posts,
        },
    ],
});

export default router;
