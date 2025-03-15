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
        name: 'mobile_slide_1',
        path: '/mobile/slide_1',
        component: () => import('@/views/mobile/slide/v1/index.vue'),
    },
    {
        name: 'mobile_slide_10',
        path: '/mobile/slide_10',
        component: () => import('@/views/mobile/slide/v10/index.vue'),
    },
    {
        name: 'mobile_verify_2',
        path: '/mobile/verify_2',
        component: () => import('@/views/mobile/verify/v2/index.vue'),
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
    {
        name: 'desktop_nav',
        path: '/desktop/nav/index',
        component: () => import('@/views/desktop/nav/index.vue'),
    },
    {
        name: 'desktop_body',
        path: '/desktop/body/index',
        component: () => import('@/views/desktop/body/index.vue'),
    },
]