<template>
  <WebViewContent />
</template>

<script>
import WebViewContent from "./components/WebViewContent.vue";

export default {
  name: "App",
  components: {
    WebViewContent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
