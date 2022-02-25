module.exports = {
  publicPath: './',
  assetsDir: 'resource',
  devServer: {
    proxy: 'http://pigdata.top/'
  },
  //webpack配置
	configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints:false
    }
  }

}
