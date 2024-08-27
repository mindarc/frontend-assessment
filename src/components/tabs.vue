<script setup>
import { ref } from 'vue';

let activeItem = ref(0)

function updateActiveItem(index) {
    activeItem.value = index
}

defineProps({
    activeItem: Number,
    data: Object
})
</script>


<template>
    <div class="w-full flex flex-col">
        <div class="flex flex-row">

            <!-- Title renderer based on amount of items in data -->
            <div v-for="item, index in data" class="w-full">
                <div @click="updateActiveItem(index)" class="flex flex-grow p-3 lg:p-5 rounded-t-lg"
                    :class="{ 'bg-gray-200': activeItem == index, 'hover:bg-gray-100': activeItem != index }">
                    <h4 class="m-0">{{ item.title }}</h4>
                </div>
            </div>
        </div>

        <!-- Class will render relevant rounded corners based on if active item is at the start or end of the array, otherwise it will render all corners rounded -->
        <div class="bg-gray-200 p-8 rounded-lg min-h-60 lg:min-h-52"
            :class="{ 'rounded-tl-none': activeItem === 0, 'rounded-tr-none': activeItem === (data.length - 1) }">
            <transition name="tab">
                <span v-html="data[activeItem].content"></span>
            </transition>
        </div>
    </div>
</template>
