<template>
  <div class="header">
    <img v-if="!isMobile" class="image-container" alt="Vue logo" src="https://via.placeholder.com/1920x650">
    <img v-if="isMobile" class="image-container" alt="Vue logo" src="https://via.placeholder.com/600x600">
    <div class="header-text-container">
      <p class="header-text-greeting">Hello Developer!</p>
      <h3 class="header-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    </div>
    <p class="header-text-bottom-right">Powered by HTML.COM</p>
  </div>
  <cardListComponent />
</template> 

<script>
import cardListComponent from './components/card-list-component.vue'

export default {
  name: 'App',
  components: {
    cardListComponent
  },
  data(){
    return{
      screenWidth: '',
      isMobile: '',
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
    }
  },
   mounted(){
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  }
}
</script>

<style>
* { 
 margin: 0; 
 padding: 0; 
 box-sizing: border-box; 
} 

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app ul {
  list-style: none;
}

#app li {
  text-align: center;
}

#app button {
  cursor: pointer;
  border: 3px solid rgb(68, 68, 68);
  color: rgb(68, 68, 68);
  padding: 8px;
  margin: 5px;
  border-radius: 18px;
  /* width: 45%; */
  font-weight: 800;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
}

body {
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

.header{
  position: relative;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
}

.header-text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
}

.header-text-greeting {
  font-size: 50px;
  font-weight: bold;
}

.header-text-centered {
  font-weight: 100;
  font-size: 28px;
}

.header-text-bottom-right {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 8px;
  color: rgb(112, 112, 112);
}

.image-container {
  width: 100vw;
}

 @media only screen and (max-width: 700px) {

    .header-text-greeting {
      font-size: 45px;
    }

    .header-text-container {
      width: 100%;
    }
  }

  @media only screen and (max-width: 500px) {

    .header-text-greeting {
      font-size: 55px;
    }

    .header-text-container {
      width: 100%;
    }

    .header-text-centered {
      font-size: 25px;
    }
  }
</style>
