<script setup lang="ts">
import type { CardItem } from './dataDisplay.type';

const { item } = defineProps<{
  item: CardItem;
}>();
</script>
<template>
  <div class="card shadow border-0" style="width: 18rem">
    <img :src="item.imageUrl" class="card-img mb-0 w-auto" />
    <div
      class="card-body text-center d-flex flex-column align-items-center justify-content-between"
    >
      <p class="card-text">{{ item.description }}</p>
      <button type="button" class="d-block btn btn-outline-dark rounded-5 border-3 text-uppercase">
        Read More
      </button>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 210px;
  object-fit: cover;
}

.card {
  padding: 1.3rem;
  width: 20rem !important;
}

.card-body {
  padding: 0;
}

.card-text {
  font-size: 17px;
  margin: 12px 0;
}

button {
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.15rem;
  padding: 10px 20px;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .card {
    width: 21.5rem !important;
  }

  img {
    height: 225px;
  }

  .card-text {
    font-size: 18px;
  }

  button {
    font-size: 14px;
  }
}
</style>
