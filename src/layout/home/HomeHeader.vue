<template>
  <div class="home-header" :class="{ show: $root.wWidth <= 600 && menuState }">
    <section class="left">
      <router-link to="/">
        <img src="@/assets/images/text_logo.png" alt="logo" />
      </router-link>
    </section>
    <section class="center" v-if="$root.wWidth > 600">
      <ul>
        <li>
          <router-link to="/invitation">청첩장</router-link>
        </li>
        <li>
          <router-link to="/notice">공지사항</router-link>
        </li>
        <li>
          <router-link to="/question">문의사항</router-link>
        </li>
      </ul>
    </section>
    <section class="right">
      <template v-if="$root.wWidth > 600">
        <router-link to="/login" class="btn-link">
          <b-button variant="outline-primary">Login</b-button>
        </router-link>
        <router-link to="/signup" class="btn-link">
          <b-button variant="outline-info">Signup</b-button>
        </router-link>
      </template>
      <template v-else>
        <button class="menu">
          <font-awesome-icon icon="bars" @click="onChangeMenuState" />
        </button>
      </template>
    </section>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  data: () => ({
    menuState: false,
  }),
  methods: {
    onChangeMenuState() {
      this.menuState = !this.menuState;
    },
  },
};
</script>
