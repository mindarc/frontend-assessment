<template>
    <div class="header">
        <img class="header__img" :src="image"/>
        <div class="header__text--wrap">
            <p class="header__title">
                Hello Developer!
            </p>
            <p class="header__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
export default defineComponent({
    name: "Header",
    setup() {
        const width : any = ref((window.innerWidth > 0) ? window.innerWidth : screen.width);
        const image = width.value > '480' ? ref('1920x650.png') : ref('600x600.png')
        return {
            width,
            image
        }
    }
})
</script>

<style scoped>

</style>