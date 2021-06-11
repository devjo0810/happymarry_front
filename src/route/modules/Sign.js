const Login = () =>
  import(/* webpackChunkName: "sign" */ "@/pages/sign/Login.vue");
const Signup = () =>
  import(/* webpackChunkName: "sign" */ "@/pages/sign/Signup.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "No" },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { layout: "No" },
  },
];
