
function isWeex () {
  return process.env.COMPILE_ENV === 'weex' // 需要在webpack中自定义
}

export default {

  methods: {

    push (path) {
      if (isWeex()) {
        const toUrl = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + path + '.js' // 将a.js的绝对地址转为b.js的绝对地址
        weex.requireModule('navigator').push({
          url: toUrl,
          animated: 'true'
        })
      } else {
        this.$router.push(path) // 使用vue-router
      }
    },

    pop () {
      if (isWeex()) {
        weex.requireModule('navigator').pop({
          animated: 'true'
        })
      } else {
        window.history.back()
      }
    }

  }

}
