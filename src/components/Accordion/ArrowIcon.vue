<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    :style="{ transform: `rotate(${rotate}deg)` }"
  >
    <path
      fill="#111"
      d="M31 24.5c-.26 0-.51-.1-.71-.29l-14.29-14.3-14.29 14.3c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l15-15c.39-.39 1.02-.39 1.41 0l15 15c.39.39.39 1.02 0 1.41-.2.19-.45.29-.71.29z"
    />
  </svg>
</template>

<script>
export default {
  name: 'CustomIcon',
  props: {
    width: {
      type: [String, Number],
      default: 15 // Default width as per the SVG you provided
    },
    height: {
      type: [String, Number],
      default: 15 // Default height as per the SVG you provided
    },
    rotate: {
      type: Number,
      default: 0
    }
  }
}
</script>
