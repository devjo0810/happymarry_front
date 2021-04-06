import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import "./plugins/perfect-scrollbar";
import "./assets/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");