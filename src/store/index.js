import Vue from "vue";
import Vuex from "vuex";
import getters from "./modules/Getters";
import actions from "./modules/Actions";
import mutations from "./modules/Mutations";
import { getCurrentOS } from "@/utils/util";

Vue.use(Vuex);

const state = {
  windowSize: {
    width: 0,
    height: 0,
  },
  currentOS: getCurrentOS(),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
