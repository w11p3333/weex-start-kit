const webpack = require('webpack')
const merge = require('webpack-merge')
const DevServer = require('webpack-dev-server')
const baseConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devWebConfig = merge(baseConfig('vue'), {
  entry: {
    app: [
      './src/render.js',
      './src/app.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client/?http://0.0.0.0:8080'
    ]
  },
  // externals: {
  //   'vue': 'Vue',
  //   'weex-vue-render': 'weexVueRenderer'
  // },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        COMPILE_ENV: '"vue"'
      }
    }),
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'qrcode.html',
      template: 'qrcode.tpl',
      chunks: []
    })
  ]
})

const devWeexConfig = merge(baseConfig('weex'), {
  entry: {
    app: ['./src/app.js']
  }
  // externals: {
  //   'vue': 'Vue',
  //   'weex-vue-render': 'weexVueRenderer'
  // }
})

new DevServer(webpack([devWebConfig, devWeexConfig]), {
  disableHostCheck: true,
  port: 8080,
  host: '0.0.0.0',
  hot: true,
  stats: { colors: true }
}).listen('8080', '0.0.0.0')
console.log('Project is running at http://0.0.0.0:8080/')
