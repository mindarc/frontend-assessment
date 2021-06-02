<template>
<header>
  <div>
    <img alt="" class="view" src="http://via.placeholder.com/1920x650"/>
  </div>
</header>
<article>
  <section>
    <div class="mainContainer">
        <div class="content">
          <img src="http://via.placeholder.com/400x300" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temport incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#">
            <div class="button">READ MORE</div>
          </a>
        </div>

        <div class="content">
          <img src="http://via.placeholder.com/400x300" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temport incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">
            <div class="button">READ MORE</div>
          </a>
        </div>

        <div class="content">
          <img src="http://via.placeholder.com/400x300" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temport incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <a href="#">
            <div class="button">READ MORE</div>
          </a>
        </div>
      </div>
  </section>
</article>
</template>

<script>
  export default {

  }
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
        width: auto;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .content {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid grey;
        width: 400px;
        height: auto;
        text-align: center;
        image-orientation: middle;
        margin: 35px 15px;
    }

.content p {
  padding: 10px;
}

.content img {
  border-radius: 10px;
}

.button {
  border-radius: 40px;
  font-size: 16px;
  padding: 10px 0;
  border: 2px solid #000000;
  width: 45%;
  background-color: #fff;
  margin: auto;
  text-transform: uppercase;
  text-align: center;
}
a {
  text-decoration: none;
  color: inherit;
}
.button a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 600px) {
  .margins {
    margin-right: 5px;
    margin-left: 5px;
  }
}
@media (min-width: 750px) {
  .full-height,
  .full-height body,
  .full-height header,
  .full-height header .view {
    height: 1020px;
  }
}

</style>
