<template>
  <header>
    <div>
      <img alt="" class="view" src="http://via.placeholder.com/1920x650"/>
    </div>
  </header>
 <!-- tabs on desktop and an accordion on mobile -->
 <div class="mainContainer">
   <input type="radio" id="tabgenesis" name="tabs">
   <div v-for="(item, index) in sections" :key="index">
       <div class="tabsection">
           <input class="tabs" :id="item.title" type="radio" name="tabs" v-on:click="toggleTabs" checked />
           <label :for="item.title">{{ item.title }}</label>
           <section class="contentbox" id="{{ 'content' + i }}">
               <p v-html="item.content"></p>
           </section>
       </div>
   </div>
  </div>
<!-- tabs on desktop and an accordion on mobile -->
</template>

<script>
import tabData from "./data.json";

export default {
   lastId : 'tab0',
  data() {
    return {
      sections: tabData
    };
  },
 
   methods: {

  toggleTabs: function(event) {
    if (this.lastId === event.target.id) {
      this.lastId = 'tabgenesis';
      const ele = document.getElementById('tabgenesis') as HTMLInputElement;
      ele.checked = true;
    } else {
      this.lastId = event.target.id;
    }
  }
   }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

html {
  font-family: 'Open Sans', sans-serif;
}
.view {
  height: 40vh !important;
  width:100%;
}

.mainContainer {
  padding: 50px;
  margin: 0 auto;
  background: #fff;
}

section {
  display: none;
  padding: 5px 5px;
  position: absolute;
}

input {
  display: none;
}

label {
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;
  font-weight: 600;
  text-align: center;
  color: #bbb;
  border: 1px solid transparent;
}

label:hover {
  color: #888;
  cursor: pointer;
}

input:checked + label {
  color: #555;
  border: 1px solid #ddd;
  border-top: 2px solid #ddd;
  border-bottom: 1px solid #fff;
}

.tabsection .tabs:checked ~ .contentbox {
  display: block;
}

p {
  padding: 5px;
}

@media screen and (max-width: 650px) {
  label {
    text-align: left;
    display: block;
    border: 1px solid #ddd;
  }

  label:before {
    margin: 0;
    font-size: 18px;
  }

  section {
    position: relative;
    border: 1px solid #ddd;
    border-top: 0px;
  }
}

@media screen and (max-width: 400px) {
  label {
    padding: 15px;
    display: block;
  }
}

@media screen and (min-width: 650px) {
  .mainContainer {
    display: inline-flex;
  }
}
</style>
