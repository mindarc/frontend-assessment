<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/index.scss';
</script>

<template>
  <header class="header">
    <nav class="header__navigation">
      <span>Go to: </span>
      <RouterLink to="/">Exercise 1</RouterLink>
      <RouterLink to="/second">Exercise 2</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>

.header {
  position: relative;
  &__navigation {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem 1.2rem;
    border-radius: 5rem;
    background-color: #333333b0;

    span, a {
      font-size: 1rem;
      color: #ffffff;
      margin: 0 5px;
    }

    a {
      font-weight: 700;
    }
  }
}
</style>
