<script setup>
import { ref } from 'vue';
import downArrowIcon from './icons/downArrowIcon.vue';
import UpArrowIcon from './icons/upArrowIcon.vue';

let activeItem = ref(0)

function updateActiveItem(index) {
  if (activeItem.value != index) {
    activeItem.value = index
  } else {
    activeItem.value = -1
  }
}

defineProps({
  data: Object
})
</script>


<template>
  <div class="w-full flex flex-col gap-6">
    <div v-for="item, index in data">

      <!-- Active item renderer -->
      <div v-if="activeItem == index">
        <div @click="updateActiveItem(index)" class="flex flex-row justify-between border-b mb-3 border-black">
          <h3 class="m-0">{{ item.title }}</h3>
          <UpArrowIcon />
        </div>
        <span v-html="item.content"></span>
      </div>

      <!-- Inactive items renderer -->
      <div v-else>
        <div @click="updateActiveItem(index)" class="flex flex-row justify-between border-b mb-3 border-gray-300">
          <h3 class="m-0">{{ item.title }}</h3>
          <downArrowIcon />
        </div>
      </div>

    </div>
  </div>
</template>
