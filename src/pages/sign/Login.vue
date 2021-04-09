<template>
  <div class="login-page">
    <div class="wrap">
      <div class="title">
          <router-link to="/" >
            <img src="@/assets/images/only_logo.png" alt="logo" />
          </router-link>
        <h4>로그인</h4>
      </div>
      <b-form class="login-form">
        <b-form-group label="이메일" label-for="input-email">
          <b-form-input
            id="input-email"
            v-model.trim="email"
            type="email"
            placeholder="Enter email"
            required
            @keydown.enter="login"
          ></b-form-input>
          <p class="err-msg" v-if="emailError">{{ emailError }}</p>
        </b-form-group>
        <b-form-group label="비밀번호" label-for="input-password">
          <b-form-input
            id="input-password"
            v-model.trim="password"
            type="password"
            placeholder="Enter Password"
            required
            @keydown.enter="login"
          ></b-form-input>
          <p class="err-msg" v-if="pwdError">{{ pwdError }}</p>
        </b-form-group>
        <b-form-checkbox v-model="isRemember">Remember Email</b-form-checkbox>
        <div class="btn-wrap">
          <b-button variant="primary" class="block" @click="login">LOGIN</b-button>
          <router-link to="/signup">
            <b-button variant="info" class="block">SIGNUP</b-button>
          </router-link>
        </div>
      </b-form>
    </div>
    <BgAnimation />
  </div>
</template>
<script>
import { isEmail } from '@/utils/util';
import { getLocalStorage, setLocalStorage, delLocalStorage } from '@/utils/cookies';
import BgAnimation from '@/components/common/BgAnimation';

export default {
  name: "Login",
  components: {
    BgAnimation
  },
  data: () => ({
    email: "",
    password: "",
    isRemember: false,
    emailError: null,
    pwdError: null,
  }),
  methods: {
    init() {
      const localEmail = getLocalStorage('email');
      if(localEmail) {
        this.email = localEmail;
        this.isRemember = true;
      }
    },
    clearErrMsg() {
      this.emailError = null;
      this.pwdError = null;
    },
    login() {
      this.clearErrMsg();
      const { email, password, isRemember } = this;
      if(!email) {
        this.emailError = '이메일을 입력해주세요.';
        return;
      }
      if(!isEmail(email)) {
        this.emailError = '이메일 형식이 올바르지 않습니다.';
        return;
      }
      if(!password) {
        this.pwdError = '비밀번호를 입력해주세요.';
        return;
      }
      if(isRemember) setLocalStorage('email', email);
      else delLocalStorage('email');

      this.$spinStart();
      setTimeout(() => {
        this.$spinEnd();
      }, 3000);
      this.$alert('로그인 성공')
      .then((flag) => {
        console.log(flag);
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>