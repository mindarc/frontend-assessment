<script setup lang="ts">
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="slide-fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
