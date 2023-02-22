<template>
    <div class="layout">
        <div class="layout__header">
            <template v-for="(item,index) in store.list" :key="index">
                <Transition name="fade">
                    <div class="layout__wrapper"
                         v-if="item.isOpen" v-html="item.content" />
                </Transition>
            </template>
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
        return {
            store
        }
    }
})
</script>

<style scoped>

</style>