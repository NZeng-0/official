import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import {baseRoutes} from "./basic-routes.js";

export const router = createRouter({
    history:
        import.meta.env.VITE_USE_HASH === 'true'
            ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH || '/')
            : createWebHistory(import.meta.env.VITE_PUBLIC_PATH || '/'),
    routes: baseRoutes ,
})

export async function setupRouter(app) {
    app.use(router)
}

router.beforeEach(async (to) => {
    // const token = useAuthStore().token
    /** 没有token */
    // if (to.path === '/register' || to.path === '/coach/login' || to.path === '/admin/login') {
    //     return true
    // }
    // if (!token) {
    //     if (WHITE_LIST.includes(to.path))
    //         return true
    //     return { path: 'login', query: { ...to.query, redirect: to.path } }
    // }
    // const info = useUserStore().info
    // if (!info || Object.keys(info).length === 0) {
    //     const [user] = await Promise.all([getUserInfo()])
    //     if (!user) {
    //         return { path: 'login', query: { ...to.query, redirect: to.path } }
    //     }
    //     useUserStore().info = user
    //     return { ...to, replace: true }
    // }
})
