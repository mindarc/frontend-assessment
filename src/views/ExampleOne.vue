<template>
  <section>
    <Header />
    <Cards />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Header,
    Cards
  }
};
</script>
