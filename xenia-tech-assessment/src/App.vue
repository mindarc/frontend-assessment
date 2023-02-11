<template>
    <header>
        <div class="hero">
            <div class="hero-text">
                <PageTitle>
                    <template #title>Hello Developer!</template>
                    <template #motto>Lorem ipsum dolor sit amet, consectetur adipiscing elit</template>
                </PageTitle>
            </div>
        </div>
    </header>

    <main>
        <section class="card-section">
            <Card>
                <template #card-img>
                    <img src="./assets/img/400x300.png" alt="">
                </template>
                <!--  ToDo: check the Card content text for length and cut it if too long -->
                <template #card-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lobortis eros. Aliquam vitae ante
                    a ligula lacinia varius eget vitae turpis. Aliquam vitae ante a ligula lacinia varius eget.
                </template>
                <!-- this link can be created in many different ways - as a link <a href="...">, but looking like a
                button, or as a button wrapped in a link, or set an on click event, which give us possibility for
                callback. Any way is good, it depends on project and preferences which one to choose-->

                <!-- Here I am setting disabled state based on conditions -->
                <!-- setting loading state depending on http call state aka `loading: http.state.loading`  -->
                <!-- setting custom method on click  -->
                <template #card-action>
                    <Button @click="" v-bind="{disabled: false, loading:false}">Read More</Button>
                </template>
            </Card>

            <Card>
                <template #card-img><img src="./assets/img/400x300.png" alt=""></template>
                <template #card-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </template>
                <template #card-action>
                    <Button @click="" v-bind="{class: 'action', disabled: false, loading:true}">Read More</Button>
                </template>
            </Card>

            <Card>
                <template #card-img><img src="./assets/img/400x300.png" alt=""></template>
                <template #card-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lobortis eros. Aliquam vitae ante
                    a ligula lacinia varius eget vitae turpis.
                </template>
                <template #card-action>
                    <Button @click="">Read More</Button>
                </template>
            </Card>
        </section>
    </main>
</template>

<script setup>
import "@fontsource/inter";
import PageTitle from "@/components/PageTitle.vue";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
</script>

<style scoped>
.hero {
    background: #8F8F8F url("./assets/img/600x600.png") center no-repeat;
    background-size: cover;
    height: 600px;
    position: relative;
}

.hero-text {
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

.card-section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

@media (min-width: 321px) {
    .hero {
        background-image: url("./assets/img/1920x650.png");
        background-size: cover;
        height: 650px;
    }

    .hero-text {
        top: 50%;
    }
}

</style>
