import * as logger from "@/utils/logger";

export default {
  setWindowSize({ commit }, payload) {
    logger.log("[setWindowSize]", payload);
    commit("setWindowSize", payload);
  },
};
