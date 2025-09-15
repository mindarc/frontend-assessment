<script>
import jsonData from '../data/data.json';
import TabComponentDesktop from './molecules/TabComponentDesktop.vue';
import TabComponentMobile from './molecules/TabComponentMobile.vue';

export default {
    data() {
        return {
            tabData: jsonData.map((item, index) => {
                item.isTabActive = (index == 0) ? true : false;
                item.tabIndex = index;
                return item
            }),
            currentActiveTabIndex: 1
        }
    },
    methods: {
        changeActiveTabIndex(el) {
            let clickTabIndex = el.target.getAttribute('data-target')
            this.tabData.map((item, index) => {
                item.isTabActive = (index == clickTabIndex) ? true : false;
                item.tabIndex = index;
                return item
            });
            this.currentActiveTabIndex = Number(clickTabIndex) + 1;
        }
    },
    components: {
        TabComponentDesktop,
        TabComponentMobile
    }
}
</script>
<template>
    <section class="content">
        <TabComponentDesktop :tabData="tabData" :currentActiveTabIndex="currentActiveTabIndex" @changeTabEmmited="changeActiveTabIndex"/>
        <TabComponentMobile :tabData="tabData" @changeTabEmmited="changeActiveTabIndex"/>
    </section>
</template>