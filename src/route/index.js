import Vue from "vue";
import VueRouter from "vue-router";
import HomeRouter from "./modules/Home";
import SignRouter from "./modules/Sign";
import InvitationRouter from "./modules/Invitation";
import UserRouter from "./modules/User";
// import AdminRouter from "./modules/Admin";
// import NoticeRouter from "./modules/Notice";
import CompoTest from "@/pages/CompoTest";
import NotFoundPage from "@/pages/NotFoundPage";

Vue.use(VueRouter);

const routes = [
  ...HomeRouter,
  ...SignRouter,
  ...InvitationRouter,
  ...UserRouter,
  {
    path: "/test",
    name: "CompoTestPage",
    component: CompoTest,
    meta: { layout: "No" },
  },
  {
    path: "*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 추후 로그인에 대한 라우터 가드 필요
  if (to.meta.auth) {
    console.log("인증이 필요합니다");
  }
  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
