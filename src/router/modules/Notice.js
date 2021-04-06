const Notice = () => import(/* webpackChunkName: "notice" */ '@/pages/notice/Notice.vue');
const NoticeDetail = () => import(/* webpackChunkName: "notice" */ '@/pages/notice/NoticeDetail.vue');

export default [
    {
        path: '/notice', name: 'Notice', component: Notice, meta: {layout: 'No'}
    },
    {
        path: '/notice/:id(\\d+)', name: 'NoticeDetail', component: NoticeDetail, meta: {layout: 'No'}
    },
]