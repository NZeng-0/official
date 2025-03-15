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
        name: 'mobile_pwd21',
        path: '/mobile/pwd21',
        component: () => import('@/views/mobile/pwd21/index.vue'),
    },
    {
        name: 'desktop',
        path: '/desktop/index',
        component: () => import('@/views/desktop/index.vue'),
    },
    {
        name: 'desktop_slide',
        path: '/desktop/slide/index',
        component: () => import('@/views/desktop/slide/index.vue'),
    },
]