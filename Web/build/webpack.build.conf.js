require('shelljs/global')
const webpack = require('webpack')
const path = require('path')
const getConfig = require('./webpack.base.conf')
const buildEntry = require('./build_entry')
const merge = require('webpack-merge')

const distPath = path.resolve(__dirname, '../dist')
// 删除原目录
rm('-rf', distPath)

const commonPlugins = [
    // split vendor js into its own file
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
      // any required modules inside node_modules are extracted to vendor
      return (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(
          path.join(__dirname, '../node_modules')
        ) === 0
      )
    }
  }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    chunks: ['vendor']
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: false
  })
]

// web config
const webConfig = merge(getConfig('vue'), {
  entry: {
    app: ['./src/render.js', './src/app.js']
  },
  output: {
    path: path.resolve(distPath, './web'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  externals: {},
  plugins: commonPlugins
})
// weex config
const weexConfig = merge(getConfig('weex'), {
  entry: buildEntry(),
  output: {
    path: path.resolve(distPath, './weex'),
    filename: 'js/[name].js'
  }
})

module.exports = [webConfig, weexConfig]
