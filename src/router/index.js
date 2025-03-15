import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import {baseRoutes} from "./basic-routes.js";
import {useDevice} from "@/composables";

export const router = createRouter({
    history:
        import.meta.env.VITE_USE_HASH === 'true'
            ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH || '/')
            : createWebHistory(import.meta.env.VITE_PUBLIC_PATH || '/'),
    routes: baseRoutes,
})

export async function setupRouter(app) {
    app.use(router)
}

router.beforeEach(async (to, from, next) => {
    const {isMobile} = useDevice()
    const mobile = isMobile()
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


    if (mobile && to.path !== '/mobile/index') {
        // Redirect to mobile index if not already there
        next({path: '/mobile/index'});
    } else if (!mobile && to.path !== '/desktop/index') {
        // Redirect to desktop index if not already there
        next({path: '/desktop/index'});
    } else {
        // Continue with the navigation
        next();
    }
})
