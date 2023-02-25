<script>
export default {
    props: ['tabData'],
    methods: {
        emitChange(el) {
            this.$emit('changeTabEmmited', el);
        }
    }
}

</script>
<template>
    <div class="tab-accordion--mobile">
        <div class="tab-accordion--mobile__items">
            <div v-for="(item, index) in tabData" class="tab-accordion--mobile__item" :class="{ 'tab-accordion--mobile__item--active': item.isTabActive }">
                <div class="tab-accordion--mobile__tab" :data-target="index" @click="emitChange">
                    {{ item.title }}
                </div>
                <div class="tab-accordion--mobile__content" :class="{ 'tab-accordion--mobile__content--active': item.isTabActive }" :data-target="index">
                    <div class="tab-accordion--mobile__text" v-html="item.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>