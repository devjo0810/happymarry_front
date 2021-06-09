const Invitation = () =>
  import(
    /* webpackChunkName: "invitation" */ "~/src/pages/invitation/InvitationTemplate.vue"
  );

export default [
  {
    path: "/marry/:id(\\d+)",
    name: "Invitation",
    component: Invitation,
    meta: { layout: "No" },
  },
];
