<script setup>
import { ref } from 'vue';
import { getScreenWidth } from '../main.js';

const screenWidth = ref(getScreenWidth());
</script>


<template>
    <div class="relative w-full h-[450px] flex flex-col justify-center align-middle">

        <!-- Banner Images -->
        <div class="before:absolute before:inset-0 before:bg-black before:opacity-40 before:z-10">
            <!-- Desktop Image -->
            <img v-if="screenWidth > 600" class="absolute inset-0 w-full h-full object-cover"
                src="https://via.placeholder.com/1920x650" alt="">

                <!-- Mobile Image -->
            <img v-else class="absolute inset-0 w-full h-full object-cover" src="https://via.placeholder.com/600x600"
                alt="">
        </div>

        <!-- Banner Content -->
        <div
            class="py-16 px-3 sm:px-12 relative z-20 flex flex-col justify-center items-center text-white *:text-center">
            <h1 class="text-4xl md:text-5xl font-bold">Hello Developer!</h1>
            <p class="text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
</template>
