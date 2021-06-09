module.exports = {
  devServer: {
    overlay: false,
    // https: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
    },
  },
};
