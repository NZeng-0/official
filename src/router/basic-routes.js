export const baseRoutes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/index.vue'),
        meta: {
            title: '首页',
        },
    },
    {
        name: 'mobile',
        path: '/mobile/index',
        component: () => import('@/views/mobile/pwd7/index.vue'),
        meta: {
            title: '首页',
        },
    },
    {
        name: 'desktop',
        path: '/desktop/index',
        component: () => import('@/views/index.vue'),
        meta: {
            title: '首页',
        },
    },
]