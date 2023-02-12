<template>
    <div class="tabs-container">
        <div class="tabs tabs-links" v-for="(tab, i) in tabs" :key="i">
            <div><a @click="openTab(i)" :class="[activeTab === i ? 'active' : '']">{{ tab.title }}</a></div>
        </div>
        <div class="tabs" v-for="(tab, i) in tabs" :key="i">
            <VTab v-if="[activeTab === i]" :class="[activeTab === i ? 'tabcontent' : 'hidden']"
                  v-html="tab.content"></VTab>
        </div>
    </div>
</template>

<script>
import VTab from "@/components/VTab.vue";

export default {
    components: {VTab},

    props: {
        tabs: {
            type: Object, default: {}
        }
    },

    data() {
        return {
            activeTab: 0,
            activeContent: 0
        }
    },

    methods: {
        openTab(key) {
            this.activeTab = key;
            this.activeContent = this.activeTab;
        }
    }
};
</script>


<style scoped>
/* ToDo: tab colors to base.css as vars */
.tabs-container {
    max-width: 620px;
    margin: var(--margin-base);
}

/* Style the tabs */
.tabs {
    overflow: hidden;
}

.tabs a {
    display: inline-block;
    cursor: pointer;
    background-color: #f1f1f1;
    font-weight: bold;
    padding: calc(var(--card-padding) / 2) var(--card-padding);
    width: 100%;
}

.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

.tabs a.active {
    cursor: default;
    background-color: paleturquoise;
    border-bottom: 2px solid #fff;
    color: #484848;
    margin-bottom: -2px;
}

.hidden {
    display: none;
}

.tabcontent {
    display: block;
    border: 1px solid var(--card-border-color);
    border-bottom-left-radius: var(--border-base-radius);
    border-bottom-right-radius: var(--border-base-radius);
    padding: var(--padding-base);
    min-height: 300px;
}

@media (min-width: 1024px) {
    .tabs {
        float: left;
        display: inline-block;
        width: auto;
    }
}
</style>