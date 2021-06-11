<template>
  <div class="user-layout">
    <UserAside />
    <div class="user-main">
      <perfect-scrollbar>
        <slot />
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import UserAside from "./UserAside.vue";

export default {
  name: "UserLayout",
  components: {
    UserAside,
  },
};
</script>
