<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings" >
    <div>
      <h1 class="green">{{ msg }}</h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h3>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
  .greetings {
    background-image: url("https://via.placeholder.com/1920x650");
    background-size: cover;
    min-height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 1023px) {
  .greetings {
    background-image: url("https://via.placeholder.com/600x600");
    background-size: cover;
    min-height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
