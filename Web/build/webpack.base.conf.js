const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function getBaseConfig (loader) {
  return {
    output: {
      path: resolve(__dirname, '../dist/web'),
      filename: '[name].' + (loader === 'vue' ? 'web' : loader) + '.js'
    },
    externals: loader === 'weex' ? {
      'vue': 'Vue',
      'weex-vue-render': 'weexVueRenderer'
    } : {},
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.runtime.js',
        'assets': resolve(__dirname, '../src/assets'),
        'components': resolve(__dirname, '../src/components'),
        'views': resolve(__dirname, '../src/views'),
        'utils': resolve(__dirname, '../src/utils'),
        'mixins': resolve(__dirname, '../src/mixins')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve(__dirname, '../src')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'url-loader',
          query: {
            limit: 1,
            name: 'images/[hash:8].[name].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 1,
            name: 'fonts/[hash:8].[name].[ext]'
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: loader + '-loader'
          // options: loader === 'vue'
          // ? vueLoaderConf
          // : {}
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          IP: JSON.stringify(require('ip').address()),
          COMPILE_ENV: loader === 'weex'
          ? '"weex"'
          : '"vue"'
        }
      }),
      new webpack.BannerPlugin({
        banner: '// { "framework": "Vue" }\n',
        raw: true
      })
    ].concat(loader === 'vue'
    ? [
      new HtmlWebpackPlugin({
        template: 'index.tpl'
      }),
      new webpack.ProvidePlugin({
        Vue: 'vue/dist/vue.runtime.js'
      })
    ]
    : [])
  }
}
