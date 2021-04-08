<template>
  <div class="signup-page">
    <div class="wrap">
      <div class="title">
        <router-link to="/">
          <img src="@/assets/images/only_logo.png" alt="logo" />
        </router-link>
        <h4>SIGNUP</h4>
      </div>
      <b-form class="signup-form">
        <b-form-group label="Email" label-for="input-email">
          <b-form-input
            v-model="email"
            id="input-email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
          <!-- <p class="err-msg" v-if="emailError">{{ emailError }}</p> -->
        </b-form-group>
        <b-form-group label="Password" label-for="input-password">
          <b-form-input
            v-model="password"
            id="input-password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
          <b-form-text>* 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내</b-form-text>
          <!-- <p class="err-msg" v-if="pwdError">{{ pwdError }}</p> -->
        </b-form-group>
        <b-form-group label="Re Password" label-for="input-re-password">
          <b-form-input
            v-model="rePwd"
            id="input-re-password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
          <!-- <p class="err-msg" v-if="pwdError">{{ pwdError }}</p> -->
        </b-form-group>
        <b-form-group label="Tel Number" label-for="input-tel1">
          <b-form-input
            v-model="tel1"
            id="input-tel1"
            type="number"
            required
          ></b-form-input>
          <b-form-input
            v-model="tel2"
            id="input-tel2"
            type="number"
            required
          ></b-form-input>
          <b-form-input
            v-model="tel3"
            id="input-tel3"
            type="number"
            required
          ></b-form-input>
          <!-- <p class="err-msg" v-if="pwdError">{{ pwdError }}</p> -->
        </b-form-group>
        <b-form-group label="Nick Name" label-for="input-nick">
          <b-form-input
            v-model="nick"
            id="input-nick"
            type="text"
            placeholder="Enter Nick Name"
            required
          ></b-form-input>
          <!-- <p class="err-msg" v-if="pwdError">{{ pwdError }}</p> -->
        </b-form-group>
        <div class="btn-wrap">
          <b-button variant="primary" class="block"
            >SIGNUP</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signup",
  data: () => ({
      email: '',
      password: '',
      rePwd: '',
      tel1: '010',
      tel2: '',
      tel3: '',
      nick: '',
  }),
  computed: {
      tel() {
          const { tel1, tel2, tel3 } = this;
          return tel1 + tel2 + tel3;
      }
  },
  methods: {
      signup() {

      }
  }
};
</script>