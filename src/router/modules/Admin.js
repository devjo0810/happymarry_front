const Admin = () =>
  import(/* webpackChunkName: "admin" */ "@/pages/admin/Admin.vue");

export default [
  {
    path: "/manage",
    name: "Admin",
    component: Admin,
    meta: { layout: "Admin" },
  },
];
