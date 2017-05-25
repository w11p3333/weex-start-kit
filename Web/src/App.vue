<template>
  <transition name="fade" mode="out-in">
    <router-view class=".container" />
  </transition>
</template>

<script>
  export default {}
</script>

<style>
  body {
    margin: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
