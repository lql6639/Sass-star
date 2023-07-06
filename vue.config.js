const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  // 添加打包分析工具
  configureWebpack: require('./webpack.config')
})
