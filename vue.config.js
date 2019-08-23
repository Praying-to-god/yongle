module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://m.228.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '^/abc': {
        target: 'http://localhost:9090',
        changeOrigin: true,
        pathRewrite: {
          '^/abc': ''
        }
      }
    }
  }
}
