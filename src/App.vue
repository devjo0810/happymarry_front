<template>
  <div id="vueFrontApp">
    <component :is="layout">
      <router-view />
    </component>
    <div class="hide">
      <input
        type="file"
        accept="image/jpeg, image/png"
        id="input-one-img"
        @change="onChangeOneImg"
      />
      <input
        type="file"
        accept="image/jpeg, image/png"
        id="input-multi-img"
        multiple
        @change="onChangeMultiImg"
      />
    </div>
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
    onChangeOneImg() {},
    onChangeMultiImg() {},
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
