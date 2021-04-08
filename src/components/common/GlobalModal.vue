<template>
    <transition name="modal">
        <div class="modal-mask" v-if="isShow">
            <div class="modal-wrap">
                <div class="header">{{ title }}</div>
                <div class="body">{{ message }}</div>
                <div class="footer">
                    <template v-if="type==='alert'">
                        <b-button @click="close">확인</b-button>
                    </template>
                    <template v-if="type==='confirm'">
                        <b-button @click="close">취소</b-button>
                        <b-button @click="confirm">확인</b-button>
                    </template>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'GlobalModal',
    data: () => ({
        isShow: false,
        title: '알림',
        message: '',
        type: 'alert',
        confirmCallback: null,
        closeCallback: null
    }),
    methods: {
        confirm() {
            console.log('show');
            this.isShow = false;
            if(this.confirmCallback) this.confirmCallback();
        },
        close() {
            console.log('close');
            this.isShow = false;
            if(this.closeCallback) this.closeCallback();
        }
    }
}
</script>