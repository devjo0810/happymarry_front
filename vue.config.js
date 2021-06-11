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
  runtimeCompiler: true,
  css: {
    sourceMap: process.env.NODE_ENV === "development",
  },
  productionSourceMap: false,
};
