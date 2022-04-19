const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: '/movie-app/dist/',
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
