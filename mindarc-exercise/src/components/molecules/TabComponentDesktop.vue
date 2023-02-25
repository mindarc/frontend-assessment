<script>
export default {
    props: ['tabData', 'currentActiveTabIndex'],
    methods: {
        emitChange(el) {
            this.$emit('changeTabEmmited', el);
        }
    }
}
</script>
<template>
    <div class="tab-accordion">
        <div class="tab-accordion__tabs">
            <div v-for="(item, index) in tabData" class="tab-accordion__tab" :class="{ 'tab-accordion__tab--active': item.isTabActive }" :data-target="index" @click="emitChange">
                {{ item.title }}
            </div>
            <div class="tab-accordion__indicator" :class="'tab-accordion__indicator--tab-' + currentActiveTabIndex"></div>
        </div>
        <div class="tab-accordion__contents">
            <div v-for="(item, index) in tabData" class="tab-accordion__content" :class="{ 'tab-accordion__content--active': item.isTabActive }" :data-target="index">
                <div class="tab-accordion__text" v-html="item.content"></div>
            </div>
        </div>
    </div>
</template>