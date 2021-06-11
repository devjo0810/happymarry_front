const Dashboard = () =>
  import(/* webpackChunkName: "user" */ "@/pages/user/Dashboard.vue");
const Profile = () =>
  import(/* webpackChunkName: "user" */ "@/pages/user/Profile.vue");
const Comment = () =>
  import(/* webpackChunkName: "user" */ "@/pages/user/Comment.vue");

export default [
  {
    path: "/user/dashboard",
    name: "UserDashboard",
    component: Dashboard,
    meta: { layout: "User" },
  },
  {
    path: "/user/profile",
    name: "UserProfile",
    component: Profile,
    meta: { layout: "User" },
  },
  {
    path: "/user/comment",
    name: "UserComment",
    component: Comment,
    meta: { layout: "User" },
  },
];
