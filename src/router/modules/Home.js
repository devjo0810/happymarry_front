const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home/Home.vue');

export default [
    {
        path: '/', name: 'HomeIndex', component: Home, meta: {layout: 'Home'}
    }
]