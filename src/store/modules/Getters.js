export default {
  getCurrentOS(state) {
    return state.currentOS;
  },
  getAppVersion() {
    return process.env.APP_VERSION;
  },
  getWindowSize(state) {
    return state.windowSize;
  },
};
