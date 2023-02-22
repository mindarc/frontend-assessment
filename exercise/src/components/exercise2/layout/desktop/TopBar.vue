<template>
    <div class="navbar">
        <template  v-for="(item, index) in store.list" :key="index">
            <div @click="toggleChildren(item)" :class="item.isOpen ? 'navbar__link navbar__link__active' : 'navbar__link'">
                {{item.title}}
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@/stores/store";
const store = useStore()
export default defineComponent({
    name: "TopBar",
    setup() {
        store.list[0].isOpen = true
        const toggleChildren = (item : {
            title: any; isOpen: boolean
            }) => {
            store.clickNavButton(item)
        }
        return {
            store,
            toggleChildren
        }
    }
})
</script>

<style scoped>

</style>