<script setup lang="ts">
import json from '../../data.json';

const myJson = json;
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
</script>

<template>
    <div class="accordion" id="accordionExample">
    <div v-for="(data, index) in myJson" :key="index" class="accordion-item content-div">
        <p>
            <a class="btn btn-primary accordion-button" data-bs-toggle="collapse" :href="`#index--${index}`" role="button" :aria-expanded="`${index === 0? 'true':'false'}`" :aria-controls="`index--${index}`">
                {{data.title}}
            </a>
        </p>
        <div :class="`accordion-collapse collapse ${index === 0? 'show':''}`" :id="`index--${index}`" data-bs-parent="#accordionExample">
            <div class="card card-body">
                <img :src="`https://via.placeholder.com/400x300`">
                <div v-html="data.content"></div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
    .accordion-item {
        border: 0;
    }
    .btn-primary {
        display: none;
    }
    .collapse:not(.show) {
        display: block;
    }
    .content-div {
        margin: 2rem 1rem;
    }
    .card-body {
        min-height: 550px;
    }

    @media (max-width: 768px) {
        .btn-primary {
            display: block;
        }
        .collapse:not(.show) {
            display: none;
        }
    }

    @media (min-width: 992px) {
        .collapse {
            max-width: 250px;
        }
            .accordion {
            display: flex;
        }
    }
    @media (max-width: 768px) {
        .collapse {
            max-width: max-content;
        }
    }
</style>