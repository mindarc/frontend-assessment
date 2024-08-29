<template>
  <div class="o-container">

    <tabComponent 
      v-if="!isMobile" 
      :tabData="content"
      :globalActive="activeIndex"
      v-on:setGlobalActive="getGlobalActive">
    </tabComponent>

    <accordionComponent 
      v-if="isMobile" 
      :accordionData="content"
      :globalActive="activeIndex"
      v-on:setGlobalActive="getGlobalActive">
    </accordionComponent>

  </div>
</template>

<script>
import tabComponent from './components/tab-component.vue';
import accordionComponent from './components/accordion-component.vue'

export default {
  name: 'App',
  components: {
    tabComponent,
    accordionComponent
  },

  data(){
    return {
      content : [
        {
          "title": "Section 1",
          "content": "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
        },
        {
          "title": "Section 2",
          "content": "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
        },
        {
          "title": "Section 3",
          "content": "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
        },
        {
          "title": "Section 4",
          "content": "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
        }
      ],
      screenWidth: '',
      isMobile: '',
      activeIndex: '-1',
    }
  },

  methods:{
    checkScreenSize(){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth > 768 ){
        this.isMobile = false;
      }else{
        this.isMobile = true;
      }
    },

    getGlobalActive(value){
      this.activeIndex = value;
    }
  },

  mounted(){
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  }
}

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .o-container{
    max-width: 1280px;
    margin: 0 auto;
  }
</style>