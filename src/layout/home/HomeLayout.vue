<template>
  <perfect-scrollbar>
    <div class="home-layout">
      <HomeHeader />
      <slot />
      <HomeFooter />
    </div>
  </perfect-scrollbar>
</template>
<script>
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

export default {
  name: "HomeLayout",
  components: {
    HomeHeader,
    HomeFooter,
  },
};
</script>
