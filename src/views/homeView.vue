<script setup>
import { ref } from 'vue';
import { getScreenWidth } from '../main.js';

const screenWidth = ref(getScreenWidth());

</script>

<template>
  <div class="w-full max-w-[1350px] m-auto px-3 sm:px-12 pt-10 *:mb-8">
    <!-- Introduction -->
    <div>
      <h1>Hello Developer!</h1>
      <p>Welcome to my submission, thank you for your time.</p>
    </div>

    <!-- Exercise Directory -->
    <div class="flex flex-col w-full gap-8 md:grid md:grid-cols-2">

      <!-- Exercise 1 -->
      <RouterLink class="inset-0" to="/exerciseone">
        <div
          class="relative w-full min-h-96 p-10 rounded-2xl overflow-clip before:absolute before:inset-0 before:bg-black before:opacity-40 before:z-10 before:hover:opacity-20 before:transition-all">
          <h2 class="text-white absolute z-20 font-bold">Exercise 1</h2>
          <img v-if="screenWidth > 430" class="absolute inset-0 w-full h-full object-cover"
            src="/exerciseOneDesktopThumbnail.png" alt="">
          <img v-else class="absolute inset-0 w-full h-full object-cover" src="/exerciseOneMobileThumbnail.png"
            alt="">
        </div>
      </RouterLink>

      <!-- Exercise 2 -->
      <RouterLink class="inset-0" to="/exercisetwo">
        <div
          class="relative w-full min-h-96 p-10 rounded-2xl overflow-clip before:absolute before:inset-0 before:bg-black before:opacity-40 before:z-10 before:hover:opacity-20 before:transition-all">
          <h2 class="text-white absolute z-20 font-bold">Exercise 2</h2>
          <img v-if="screenWidth > 430" class="absolute inset-0 w-full h-full object-cover"
            src="/exerciseTwoDesktopThumbnail.png" alt="">
          <img v-else class="absolute inset-0 w-full h-full object-cover" src="/exerciseTwoMobileThumbnail.png"
            alt="">
        </div>
      </RouterLink>

    </div>



    <!-- Code Question Answer -->
    <div class="w-full flex flex-col gap-6 p-6 rounded-2xl bg-gray-100">
      <h4>What's with JavaScript's weird type decisions?</h4>

      <div class="w-full flex flex-col gap-4">
        <p>Why does <code>( 'b' + 'a' + + 'a' + 'a' ).toLowerCase()</code> result in
          <code>'banana'?</code>
        </p>

        <p>The result of <code>( 'b' + 'a' + + 'a' + 'a' ).toLowerCase()</code> is <code>banana</code> due to a type error from JavaScript's engine. It assumes that <code>+ 'a'</code> is to be applied to a number. But <code>'a'</code> is a string, so it returns <code>NaN</code> instead.
        </p>

        <code>( 'b' + 'a' + NaN + 'a' ).toLowerCase()</code>

        <p>The function <code>.toLowerCase()</code> is then applied, converting all types into strings instead. Resulting in <code>banana </code> as the final result.
        </p>

        <p>JavaScript has many quirks like this because it's a dynamically typed language. Solutions like ESLint and TypeScript have been developed to help solve these issues before they occur. Thank goodness!</p>
      </div>
    </div>
  </div>
</template>
