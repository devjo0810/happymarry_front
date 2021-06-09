<template>
  <div id="vueFrontApp">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import NoLayout from "./layout/NoLayout";
import HomeLayout from "./layout/home/HomeLayout";
import AdminLayout from "./layout/admin/AdminLayout";
import { mapActions } from "vuex";

export default {
  name: "vueFrontApp",
  components: {
    NoLayout,
    HomeLayout,
    AdminLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "No") + "Layout";
    },
  },
  methods: {
    ...mapActions(["setWindowSize"]),
    windowResizeHandler() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.setWindowSize({ width, height });
    },
  },
  mounted() {
    window.addEventListener("resize", this.windowResizeHandler);
    this.windowResizeHandler();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.windowResizeHandler);
  },
};
</script>
