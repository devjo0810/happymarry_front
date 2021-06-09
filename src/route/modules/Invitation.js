const Select = () =>
  import(
    /* webpackChunkName: "invitation" */ "@/pages/invitation/InvitationSelect.vue"
  );
const Create = () =>
  import(
    /* webpackChunkName: "invitation" */ "@/pages/invitation/InvitationCreate.vue"
  );
const Detail = () =>
  import(
    /* webpackChunkName: "invitation" */ "@/pages/invitation/InvitationDetail.vue"
  );
const Modify = () =>
  import(
    /* webpackChunkName: "invitation" */ "@/pages/invitation/InvitationModify.vue"
  );

export default [
  {
    path: "/invitation/select",
    name: "InvitationSelect",
    component: Select,
    meta: { auth: true },
  },
  {
    path: "/invitation/create",
    name: "InvitationCreate",
    component: Create,
    meta: { auth: true },
  },
  {
    path: "/invitation/modify/:id(\\d+)",
    name: "InvitationChoose",
    component: Modify,
    meta: { auth: true },
  },
  {
    path: "/invitation/:id(\\d+)",
    name: "InvitationDetail",
    component: Detail,
    meta: { layout: "No" },
  },
];
