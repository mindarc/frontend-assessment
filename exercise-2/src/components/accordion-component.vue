<template>
 <div class="c-accordion">
    <div class="c-accordion__item" v-for="(accordItem, index) in accordionData" :key="accordItem.id">
      <button :class="{ 'isActive': activeAccordion == index }"
          @click="setActiveAccord($event.target)"
          :data-accordid="index">
          {{ accordItem.title }}
      </button>
      <div v-html="accordItem.content">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'accordionComponent',
    data(){
      return {
        activeAccordion: '0',
      }
    },
    props: {
      accordionData: Array,
      globalActive: String
    },

    methods:{
      setActiveAccord(accord){
        if(this.activeAccordion == accord.dataset.accordid){
          this.activeAccordion = '-1'
        }else{
          this.activeAccordion = accord.dataset.accordid;
        }
        this.$emit('setGlobalActive', this.activeAccordion);
      }
    },

    mounted(){
      if(this.globalActive == '-1'){
        this.activeAccordion = '0';
      }else{
        this.activeAccordion = this.globalActive;
      }
    }
  }
</script>

<style scoped>
    .c-accordion{
      padding: 24px ;
    }
    .c-accordion__item > button{
      display: block;
      width: 100%;
      background: #dddddd;
      border: none;
      padding: 24px;
      border-bottom: solid 1px #cccccc;
      text-transform: uppercase;
      color: #636363;
    }

    .c-accordion__item > div{
        overflow: hidden;
        max-height: 0;
        transition: all ease-in-out 400ms;
        text-align: left;
        padding: 0 12px;
        background: #eeeeee;
    }

    .c-accordion__item > button.isActive + div{
        max-height: 2000px;
    }
</style>
