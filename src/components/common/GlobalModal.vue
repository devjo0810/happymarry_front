<template>
  <transition name="modal">
    <div class="modal-mask" v-if="isShow">
      <div class="modal-wrap">
        <div class="header">{{ title }}</div>
        <div class="body">{{ message }}</div>
        <div class="footer">
          <template v-if="type === 'alert'">
            <b-button variant="primary" @click="close(true)">확인</b-button>
          </template>
          <template v-if="type === 'confirm'">
            <b-button variant="danger" @click="close(false)">취소</b-button>
            <b-button variant="primary" @click="close(true)">확인</b-button>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "GlobalModal",
  data: () => ({
    isShow: false,
    title: "알림",
    message: "",
    type: "alert",
    promiseResolve: null,
    promiseReject: null,
  }),
  methods: {
    close(flag) {
      try {
        this.isShow = false;
        if (this.promiseResolve) this.promiseResolve(flag);
      } catch (e) {
        if (this.promiseReject) this.promiseReject(e);
      }
    },
  },
};
</script>
