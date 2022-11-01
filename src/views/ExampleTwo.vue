<template>
  <section>
    <Header />
    <Tabs />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "ExampleTwo",
  components: {
    Header,
    Tabs
  }
};
</script>
