const { defineConfig } = require('@vue/cli-service')
const target = "http://127.0.0.1:3000";
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
}
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  devServer: {
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
}