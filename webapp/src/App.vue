<template>
  <TopBanner />
  <ContentBox />
</template>

<script>
import TopBanner from "./components/TopBanner.vue";
import ContentBox from "./components/ContentBox.vue";

export default {
  name: "App",
  components: {
    TopBanner,
    ContentBox,
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
