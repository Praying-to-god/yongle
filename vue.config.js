module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.228.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
