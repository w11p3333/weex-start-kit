const webpack = require('webpack')
const merge = require('webpack-merge')
const DevServer = require('webpack-dev-server')
const baseConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const opn = require('opn')

const port = 8080
const host = '0.0.0.0'

const devWebConfig = merge(baseConfig('vue'), {
  entry: {
    app: [
      './src/render.js',
      './src/app.js',
      'webpack/hot/dev-server',
      `webpack-dev-server/client/?http://${host}:${port}`
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
  port,
  host: '0.0.0.0',
  hot: true,
  // open: true,
  stats: { colors: true }
}).listen(`${port}`, host)
console.log(`Project is running at http://${host}:${port}/`)

opn(`http://localhost:${port}/`)
