const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: '/movie-app/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  }
});
