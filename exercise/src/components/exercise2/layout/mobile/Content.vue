<template>
    <div class="accordions">
        <div class="accordions__list" v-for="(item, index) in store.list" :key="index">
            <div @click="clickAccordionButton(item)" :class="item.isOpen ? 'accordions__list__title accordions__list__title__active' : 'accordions__list__title'">
                {{item.title}}
            </div>
            <div class="accordions__list__content" v-if="item.isOpen"  v-html="item.content" />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@/stores/store";
const store = useStore()
export default defineComponent({
    name: "Content",
    setup() {
        store.list[0].isOpen = true
        const clickAccordionButton = (item : {
            title: any; isOpen: boolean
        }) => {
            store.clickNavButton(item)
        }
        return { store, clickAccordionButton }
    }
})
</script>

<style scoped>

</style>