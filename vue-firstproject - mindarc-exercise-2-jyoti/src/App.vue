<template>
  <div id="app">
    <firstProject msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import firstProject from './components/firstProject.vue'

export default {
  name: 'App',
  components: {
    firstProject
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
