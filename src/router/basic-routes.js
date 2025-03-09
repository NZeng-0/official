export const basicRoutes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/views/index.vue'),
        meta: {
            title: '首页',
        },
    },
]