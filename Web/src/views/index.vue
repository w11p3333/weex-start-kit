<template>
  <div class="container">
    <image class="image-view" :src="image" />
    <text class="text-view">Hello World From {{ platform }}</text>
    <my-button @click="click" title="跳转" />
  </div>
</template>

<script>
import myButton from 'components/myButton'
import mixins from 'mixins'
export default {

  mixins: [mixins],

  components: {
    myButton
  },

  data: _ => ({
    platform: 'Web',
    image: require('assets/image/weex.png')
  }),

  created () {
    if (weex.config.params) {
      this.platform = weex.config.params.platform
    }
  },

  methods: {
    click () {
      weex.requireModule('storage').setItem('text', 'Hello World From index.vue', ({ result }) => {
        if (result === 'success') {
          this.push('second')
        }
      })
    }
  }

}
</script>

<style lang="sass" scope>
  @import '../assets/style/index.scss'
</style>
