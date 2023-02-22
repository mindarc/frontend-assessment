<template>
    <div class="section">
        <template  v-for="(section, index) in sections" :key="index">
            <div class="section__card">
                <img class="section__img" :src="section.image">
                <div class="section__description">
                    {{ section.description }}
                </div>
                <div class="section__read_more">
                    READ MORE
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
export default defineComponent({
    name: "Content",
    setup() {
        const sections = ref<{
            image: string,
            description: string
        }[]>([
            {
                image: '400x300.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus elit est, ac ultricies tellus volutpat vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales tempor rutrum. Sed at elementum turpis.'
            },
            {
                image: '400x300.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus elit est, ac ultricies tellus volutpat vel.'
            },
            {
                image: '400x300.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus elit est, ac ultricies tellus volutpat vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            },
        ])
        return {
            sections
        }
    }
})
</script>

<style scoped>

</style>