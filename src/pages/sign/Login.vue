<template>
  <div class="login-page">
    <div class="wrap">
      <div class="title">
          <router-link to="/" >
            <img src="@/assets/images/only_logo.png" alt="logo" />
          </router-link>
        <h4>LOGIN</h4>
      </div>
      <b-form class="login-form">
        <b-form-group label="Email" label-for="input-email">
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="input-password">
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox v-model="form.check">Remember Email</b-form-checkbox>
        <div class="btn-wrap">
          <b-button variant="primary" class="block" @click="login">LOGIN</b-button>
          <router-link to="/signup">
            <b-button variant="info" class="block">SIGNUP</b-button>
          </router-link>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: () => ({
    form: {
      email: "",
      password: "",
      check: false,
    },
  }),
  methods: {
    login() {
      this.$confirm({
        message: '로그인',
        callback(flag) {
          if(flag) console.log('로그인 확인');
          else console.log('로그인 취소');
        },
      });
    }
  }
};
</script>