<template>
  <div class="notfound-page">
    <h1>404 Not Found Page...</h1>
    <div class="btn-wrap">
      <b-button variant="primary" class="block" @click="goMain"
        >메인페이지</b-button
      >
      <b-button variant="info" class="block" @click="goPrevious"
        >이전페이지</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFoundPage",
  methods: {
    goMain() {
      this.$router.push("/");
    },
    goPrevious() {
      this.$router.go(-1);
    },
  },
};
</script>
