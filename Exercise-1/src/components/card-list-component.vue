<template>
  <div class="list-container">
    <template v-for="(imageData, index) in imageDataList" :key="index">
      <div class="responsive">
        <div class="image-content">
          <img src="https://via.placeholder.com/400x300" width="600" height="400">
          <p class="image-content-text">Powered by HTML.COM</p>
        </div>
        <p class="desc">{{imageData.description}}
        </p>
        <button>READ MORE</button>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        imageDataList:[
          {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad menim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`
          },
          {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.`
          },
          {
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad menim veniam, quis nostrud exercitation
        ullamco.`
          }
        ]
      }
    },
    name: 'cardListComponent',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  .image-content {
      position: relative;
  }

  .image-content-text {
    position: absolute;
    bottom: 25px;
    right: 20px;
    font-size: 5px;
    color: rgb(165, 165, 165);
  }

  .desc {
    padding: 15px;
    text-align: center;
    height: 150px;
    font-size: 15px;
    padding-top: 0px;
  }

  * {
    box-sizing: border-box;
  }

  .responsive {
    float: left;
    width: 30%;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 5px;
    margin: 20px;
    padding-bottom: 10px;
    font-size: 20px;
  }

  .list-container {
    margin: 1rem;
    display: flex;
    justify-content: center;
    margin-left: 200px;
    margin-right: 200px;
  }

  @media only screen and (max-width: 700px) {
    .responsive {
      width: 49.99999%;
      margin: 6px 0;
    }

    .list-container {
      margin: 2rem;
      display: block;
    }

    .desc {
      height: unset;
    }
  }

  @media only screen and (max-width: 500px) {
    .responsive {
      width: 100%;
    }

    .list-container {
      margin: 1rem;
      display: block;
    }

    .desc {
      height: unset;
      font-size: 18px;
    }

    .image-content-text {
      font-size: 8px;
    }
  }
</style>
