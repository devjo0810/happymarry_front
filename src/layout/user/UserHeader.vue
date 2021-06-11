<template>
  <div class="user-header">
    <div class="left-section">Search</div>
    <div class="right-section">
      <button>
        <font-awesome-icon
          icon="sign-out-alt"
          class="logout"
          @click="onLogout"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserHeader",
  methods: {
    onLogout() {
      this.$confirm("로그아웃하시겠습니까?").then(flag => {
        if (flag) console.log(flag);
      });
    },
  },
};
</script>
