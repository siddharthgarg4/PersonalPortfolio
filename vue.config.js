module.exports = {
  publicPath: "/",
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  }
};
