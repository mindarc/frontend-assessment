<template>
  <div class="c-tab-component">
    <ul class="tabs">
      <li v-for="(tab, index) in tabData " 
        :key="tab.id" 
        :class="{ 'isActive': activeTab == index }" 
        :data-tabId = index
        @click="setActiveTab($event.target)">
        {{ tab.title }}
      </li>
    </ul>

    <div class="tabs-contents">
      <div class="" v-for="(tab, index) in tabData" 
        :key="tab.id" 
        v-html="tab.content"
        :class="{ 'isActive': activeTab == index }">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabComponent',
    data(){
      return {
        activeTab: '0'
      }
    },
    props: {
      tabData: Array,
      globalActive: String
    },

    methods:{
      setActiveTab(tab){
        this.activeTab = tab.dataset.tabid;
        this.$emit('setGlobalActive', tab.dataset.tabid);
      }
    },

    mounted(){
      if(this.globalActive == '-1'){
        this.activeTab = '0';
      }else{
        this.activeTab = this.globalActive;
      }
    }
  }
</script>

<style scoped>
  .tabs{
    display: flex;
    align-items: center;
    border-bottom: solid 2px #dddddd;
    padding: 0 64px;
    background: #eeeeee;
  }

  .tabs li{
    list-style-type: none;
    cursor: pointer;
    padding: 16px;
    background: #fefefe;
    position: relative;
    transition: all ease-in-out 400ms;
    text-transform: uppercase;
    background: #eeeeee;
    color: #636363;
  }

  .tabs li:after{
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: #dddddd;
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: all ease-in-out 400ms;
  }

  .tabs li:hover, .tabs li.isActive{
    color: teal;
    background: #f2f2f2;
  }

  .tabs li:hover:after, .tabs li.isActive:after{
    background: teal;
  }

  .tabs-contents > div{
    display: none;
    padding: 24px 64px;
    text-align: left;
  }

  .tabs-contents > div.isActive{
    display: block;
  }

</style>
