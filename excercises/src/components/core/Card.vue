<script setup>
import { ImageLoader } from '../core';

const props = defineProps({
  imageUrl: '',
  description: '',
  buttonText: ''
});

const emit = defineEmits(['onBtnClickCallback']);

/**
 * Callback function for clicking button on card
 *
 * @param {Object} e
 */
const onBtnClick = (e) => {
  emit('onBtnClickCallback', e);
}
</script>
<template>
  <div class="card w-100 d-flex flex-column p-3">
    <div class="card-img">
      <ImageLoader
        :imageUrl="imageUrl"
        :lazyLoad="true"
      />
    </div>
    <div class="card-info__container d-flex flex-md-grow-1 justify-content-between align-items-center flex-column py-2">
      <p class="card-info__description">
        {{description}}
      </p>
      <button
        v-if="buttonText"
        class="card-info__btn py-1 px-3"
        @click="onBtnClick"
      >
        {{buttonText}}
      </button>
    </div>
  </div>
</template>
<style scoped>
.card:deep() .image-loader {
  border-radius: 6px;
  padding-bottom: 75%;
}
.card-info__container {
  text-align: center;
}
.card-info__btn {
  background-color: transparent;
  border-radius: 20px;
  border-width: 3px;
  border-color: #000;
  text-transform: uppercase;
  font-weight: bold;
}
</style>