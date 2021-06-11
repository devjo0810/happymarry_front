import Vue from "vue";
import Vuex from "vuex";
import getters from "./modules/Getters";
import actions from "./modules/Actions";
import mutations from "./modules/Mutations";
import { getCurrentOS } from "@/utils/util";

Vue.use(Vuex);

const state = {
  currentOS: getCurrentOS(),
  appVersion: process.env.VUE_APP_VERSION,
  windowSize: {
    width: 0,
    height: 0,
  },
  userSideMenu: "dashboard",
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
