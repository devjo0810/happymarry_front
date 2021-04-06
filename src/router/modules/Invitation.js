const Invitation = () => import(/* webpackChunkName: "invitation" */ '@/pages/invitation/Invitation.vue');

export default [
    {
        path: '/marry/:id(\\d+)', name: 'Invitation', component: Invitation, meta: {layout: 'No'}
    }
]