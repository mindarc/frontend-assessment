<script>
import CardItem from "@/components/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          body: "Lorem ipsum dolor sit amen, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          id: 2,
          body: "Lorem ipsum dolor sit amen, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          body: "Lorem ipsum dolor sit Emet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="card-list">
    <CardItem v-for="card in cards" :key="card.id" :details="card.body" />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .card-list {
    flex-direction: row;
    margin: 20px 0;
  }
}
</style>
