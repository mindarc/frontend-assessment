import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Exercise1 from '@/views/exercise1/Exercise1.vue'
import Exercise2 from '@/views/exercise2/Exercise2.vue'
import NotFound from '@/views/404.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: '/exercise-1',
            name: 'exercise1',
            component: Exercise1
        },
        {
            path: '/exercise-2',
            name: 'exercise2',
            component: Exercise2
            // children: store.getUrl()
        },
        {
            // the 404 route, when none of the above matches
            path: "/404",
            name: "404",
            component: NotFound
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/404"
        }
    ],
});

// router.beforeEach((to, from, next) => {
//
//     console.log(store.getConfig())
//     next()
// })

export default router;
