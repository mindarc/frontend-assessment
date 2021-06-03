<template>
    <!--Header-->
    <header class="header">
        <div class="view banner">
            <div class="container">
                <h1>
                    Hello Developer!
                </h1>
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h6>
            </div>
        </div>
    </header>
    <!--Header-->

    <article>
        <section>
            <div class="mainContainer">
                <div class="row">
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
            </div>
        </section>
    </article>
</template>

<script>export default {

    }</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    html {
        font-family: 'Open Sans', sans-serif;
    }

    header {
        height: unset !important;
    }

    .banner {
        background: url('http://via.placeholder.com/1920x650') no-repeat center center;
        background-size: cover;
    }

    .view {
        height: 40vh !important;
    }

    h1 {
        text-align: center;
        padding-top: 100px;
        color: #fff;
    }

    h6 {
        line-height: 1.7;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }

    .mainContainer {
        width: 95%;
        margin: auto;
    }

    .row {
        width: 100%;
        margin: auto 10px auto 10px;
        display: flex;
        flex-wrap: wrap;
    }

    .content {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid grey;
        width: 30%;
        height: auto;
        text-align: center;
        image-orientation: middle;
        margin: 35px auto 35px auto;
    }

        .content p {
            padding: 10px;
        }

        .content img {
            border-radius: 10px;
            width: 80%;
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

    @media (max-width: 650px) {
        .row {
            width: 75%;
            margin: auto;
        }

        .content {
            padding: 10px;
            border-radius: 10px;
            border: 1px solid grey;
            width: 95%;
            height: auto;
            text-align: center;
            image-orientation: middle;
            margin: 35px 15px;
        }

        .button {
            border-radius: 40px;
            font-size: 16px;
            padding: 10px 0;
            border: 2px solid #000000;
            width: 40%;
            background-color: #fff;
            margin: auto;
            text-transform: uppercase;
            text-align: center;
        }
    }
</style>
