export default {
  setWindowSize(state, payload) {
    state.windowSize.width = payload.width;
    state.windowSize.height = payload.width;
  },
};
