<template>
  <button @click="click" class="button-view">
    <text class="button-view-text">{{ title }}</text>
  </button>
</template>

<script>
export default {

  name: 'my-button',

  props: {
    title: String
  },

  methods: {
    click () {
      this.$emit('click')
    }
  }

}
</script>

<style lang="sass" scope>
.button-view {
  width: 300px;
  height: 100px;
  border-radius: 50px;
  background-color: lightblue;
  justify-content: center;
  align-items: center;
  border: none;
}
.button-view-text {
  text-align: center;
  color: white;
}
</style>
