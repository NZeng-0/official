export const baseRoutes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/views/index.vue'),
    },
    {
        name: 'mobile',
        path: '/mobile/index',
        component: () => import('@/views/mobile/pwd7/index.vue'),
    },
    {
        name: 'mobile_pwd9',
        path: '/mobile/pwd9',
        component: () => import('@/views/mobile/pwd9/index.vue'),
    },
    {
        name: 'mobile_pwd20',
        path: '/mobile/pwd20',
        component: () => import('@/views/mobile/pwd20/index.vue'),
    },
    {
        name: 'desktop',
        path: '/desktop/index',
        component: () => import('@/views/index.vue'),
    },
]