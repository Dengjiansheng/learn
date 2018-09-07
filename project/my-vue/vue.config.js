module.exports = {
  // chainWebpack: config => {
  //   // clear the existing images module
  //   const imagesRule = config.module.rule('images');
  //   // imagesRule.uses.clear();
  //   imagesRule
  //     // you can set whatever you want or remove this line completely
  //     .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .tap(options => {
  //       return {
  //         ...options,
  //         limit: 10000 // no limit
  //       };
  //     })
  //     .end();
  // },
  assetsDir: 'h5',
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    },
    other: {
      // page 的入口
      entry: 'src/other/main.js',
      // 模板来源
      template: 'public/other.html',
      // 在 dist/index.html 的输出
      filename: 'other.html'
    },
    Growing: {
      // page 的入口
      entry: 'src/Growing/main.js',
      // 模板来源
      template: 'public/Growing.html',
      // 在 dist/index.html 的输出
      filename: 'Growing.html'
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: '/index.html' },
        { from: /\/Growing/, to: '/Growing.html' },
        { from: /\/other/, to: '/other.html' }
      ]
    }
  },

  lintOnSave: true,

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
}