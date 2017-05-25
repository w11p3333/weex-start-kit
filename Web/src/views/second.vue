<template>
  <div class="second-container">
    <text class="second-text-view">{{ text }}</text>
    <my-button class="second-button-view" @click="click" title="返回" />
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
    text: 'Hello World From Second.vue'
  }),

  created () {
    weex.requireModule('storage').getItem('text', ({ result, data }) => {
      if (result === 'success') {
        this.text = data
      }
    })
  },

  methods: {
    click () {
      this.pop()
    }
  }

}
</script>

<style lang="sass" scope>
  .second-container {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .second-text-view {
    font-size: 50px;
    text-align: center;
    margin-bottom: 50px;
  }
</style>
