<template>
 <div class="accordion" id="accordionFlush">
    <div class="accordion-item" v-for="(accordItem, index) in accordionData" :key="index">
      <h2 class="accordion-header" :id="'flush-heading'+index">
        <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse'+index"
            aria-expanded="false"
            :aria-controls="'flush-collapse-'+index">
          {{ accordItem.title }}
        </button>
      </h2>
      <div
        :id="'flush-collapse'+index"
        @click="setActiveAccord($event.target)"
        :class="setClass(index)"
        :aria-labelledby="'flush-heading'+index"
        data-bs-parent="#accordionFlush">
        <div class="accordion-body" v-html="accordItem.content">
        </div>
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
      },
      setClass(value){
        if(value === 0){
          return "accordion-collapse collapse show"
        } else {
          return "accordion-collapse collapse"
        }
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