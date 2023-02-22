<template>
  <TopBanner />
</template>

<script>
import TopBanner from "./components/TopBanner.vue";

export default {
  name: "App",
  components: {
    TopBanner,
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
