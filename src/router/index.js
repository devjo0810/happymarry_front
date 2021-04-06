import Vue from "vue";
import VueRouter from "vue-router";
import HomeRouter from './modules/Home';
import AdminRouter from './modules/Admin';
import InvitationRouter from './modules/Invitation';
import NoticeRouter from './modules/Notice';
import SignRouter from './modules/Sign';

Vue.use(VueRouter);

const routes = [
  ...HomeRouter,
  ...AdminRouter,
  ...InvitationRouter,
  ...NoticeRouter,
  ...SignRouter,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
