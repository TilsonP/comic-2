const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: 'https://xkcd.com',
        changeOrigin: true,
        pathRewrite: { '^/': '' },
      },
    },
  },
});
