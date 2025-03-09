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
        name: 'mobile_pwd9',
        path: '/mobile/pwd9',
        component: () => import('@/views/mobile/pwd9/index.vue'),
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