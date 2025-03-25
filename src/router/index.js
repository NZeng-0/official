import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import {baseRoutes} from "./basic-routes.js";
import { init } from "@/composables";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH || '/'),
    routes: baseRoutes,
})

export function setupRouter(app) {
    app.use(router)
}

const route = ["body"]

router.beforeEach(async (to, from, next) => {
    // const [ res ] = await Promise.all([init()])
    // if (res.name === 'body' && to.path !== '/mobile/body_1') {
    //     return next({ path: '/mobile/body_1' })
    // }
    const mobile = /Mobi|Android|iPhone/i.test(navigator.userAgent); // 判断是否为移动端

    if (mobile && to.path !== '/mobile/index') {
        if (to.path.startsWith('/mobile')) {
            return next();
        }
        // 移动端未在 "/mobile/index"，重定向到 "/mobile/index"
        next({path: '/mobile/index'});
    } else if (!mobile && to.path !== '/desktop/index') {
        if (to.path.startsWith('/desktop')) {
            return next();
        }
        // 非移动端未在 "/desktop/index"，重定向到 "/desktop/index"
        next({path: '/desktop/index'});
    } else {
        // 继续导航
        next();
    }
});

