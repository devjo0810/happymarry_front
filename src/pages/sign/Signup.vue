<template>
  <div class="signup-page">
    <div class="wrap">
      <div class="title">
        <router-link to="/">
          <img src="@/assets/images/only_logo.png" alt="logo" />
        </router-link>
        <h4>회원가입</h4>
      </div>
      <b-form class="signup-form">
        <b-form-group label="이메일" label-for="input-email">
          <b-form-input
            v-model.trim="email"
            id="input-email"
            type="email"
            placeholder="Enter email"
            required
            @keydown.enter="signup"
          ></b-form-input>
          <p class="err-msg" v-if="emailError">{{ emailError }}</p>
        </b-form-group>
        <b-form-group label="비밀번호" label-for="input-password">
          <b-form-input
            v-model.trim="password"
            id="input-password"
            type="password"
            placeholder="Enter Password"
            required
            @keydown.enter="signup"
          ></b-form-input>
          <b-form-text>* 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내</b-form-text>
          <p class="err-msg" v-if="pwdError">{{ pwdError }}</p>
        </b-form-group>
        <b-form-group label="비밀번호 재입력" label-for="input-re-password">
          <b-form-input
            v-model.trim="rePwd"
            id="input-re-password"
            type="password"
            placeholder="Enter Password"
            required
            @keydown.enter="signup"
          ></b-form-input>
          <p class="err-msg" v-if="rePwdError">{{ rePwdError }}</p>
        </b-form-group>
        <b-form-group label="전화번호" label-for="input-tel1">
          <b-row>
            <b-col>
              <b-form-select
                v-model.trim="tel1"
                :options="telOptions"
                id="input-tel1"
                required
                @keydown.enter="signup"
              ></b-form-select>
            </b-col>
            <b-col>
              <b-form-input
                v-model.trim="tel2"
                id="input-tel2"
                type="text"
                required
                maxlength="4"
                @keyup="onNumberHandler($event, tel2)"
                @keydown.enter="signup"
              ></b-form-input>
            </b-col>
            <b-col>
              <b-form-input
                v-model.trim="tel3"
                id="input-tel3"
                type="text"
                required
                maxlength="4"
                @keyup="onNumberHandler($event, tel2)"
                @keydown.enter="signup"
              ></b-form-input>
            </b-col>
          </b-row>
          <p class="err-msg" v-if="telError">{{ telError }}</p>
        </b-form-group>
        <b-form-group label="닉네임" label-for="input-nick">
          <b-form-input
            v-model.trim="nick"
            id="input-nick"
            type="text"
            placeholder="Enter Nick Name"
            required
            @keydown.enter="signup"
          ></b-form-input>
          <b-form-text>* 특수문자(_, -) / 문자 / 숫자 포함 형태의 3~10자리 이내</b-form-text>
          <p class="err-msg" v-if="nickError">{{ nickError }}</p>
        </b-form-group>
        <div class="btn-wrap">
          <b-button
            variant="primary"
            class="block"
            @click="signup"
            >SIGNUP</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
import { isEmail, isPassword, isTel, isNick, isNumber } from '@/utils/util.js';

export default {
  name: "Signup",
  data: () => ({
      email: '',
      password: '', rePwd: '',
      tel1: '010', tel2: '', tel3: '',
      nick: '',
      numReg: /^\d/g,
      telOptions: [
        {value: '010', text: '010'},
        {value: '011', text: '011'},
        {value: '012', text: '012'},
        {value: '017', text: '017'},
        {value: '019', text: '019'},
      ],
      emailError: null, pwdError: null, rePwdError: null,
      telError: null, nickError: null
  }),
  computed: {
      tel() {
          const { tel1, tel2, tel3 } = this;
          return `${tel1}-${tel2}-${tel3}`;
      }
  },
  watch: {
    tel2() {
      return this.tel2 = this.tel2.replace(/[^0-9]/g, '');
    },
    tel3() {
      return this.tel3 = this.tel3.replace(/[^0-9]/g, '');
    },
  },
  methods: {
      signup() {
        this.clearErrMsg();
        const {email, password, rePwd, tel, nick} = this;
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
        if(!isPassword(password)) {
          this.pwdError = '비밀번호 형식이 올바르지 않습니다.';
          return;
        }
        if(password !== rePwd) {
          this.rePwdError = '비밀번호가 일치하지 않습니다.';
          return;
        }
        if(!isTel(tel)) {
          this.telError = '전화번호 형식이 올바르지 않습니다.';
          return;
        }
        if(!isNick(nick)) {
          this.nickError = '닉네임 형식이 올바르지 않습니다.';
          return;
        }

      },
      clearErrMsg() {
        this.emailError = null;
        this.pwdError = null;
        this.rePwdError = null;
        this.telError = null;
        this.nickError = null;
      },
      onNumberHandler(e, msg) {
        isNumber(e, msg);
      }
  }
};
</script>