module.exports = {
  // 插件的调用
  plugins: {
    // 自动补全浏览器的私有前缀功能，但在弹性盒子上兼容性有问题
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 转换的基准数 html 的 fontSize 大小为 37.5
      propList: ['*']
    }
  }
}
