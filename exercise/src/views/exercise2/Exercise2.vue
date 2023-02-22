

<template>
    <template v-if="isMobile">
        <TopBar />
        <Content />
    </template>
    <template v-else>
        <MobileContent />
    </template>
</template>
<script lang="ts">
import TopBar from '@/components/exercise2/layout/desktop/TopBar.vue'
import Content from "@/components/exercise2/layout/desktop/Content.vue";
import MobileContent from '@/components/exercise2/layout/mobile/Content.vue'
import {defineComponent, ref} from "vue";
import {useStore} from "@/stores/store";
const store = useStore()
export default defineComponent({
    name: "Exercise2",
    components: {
        TopBar, Content, MobileContent
    },
    setup() {
        const width : any = ref((window.innerWidth > 0) ? window.innerWidth : screen.width);
        const isMobile = width.value > '481'
        return {
            isMobile
        }
    }
})
</script>