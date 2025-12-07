<script lang="ts" setup>
import Plane from '~/assets/images/plane.svg'
</script>

<template>
  <button
    type="submit"
    class="p-2 outline-none transition-all lg:ml-auto lg:mt-0 2xl:p-3"
    title="Envoyer"
  >
    <Plane class="h-12 rotate-8 2xl:h-16" :font-controlled="false" />
  </button>
</template>

<style scoped>
button:hover {
  animation: rotateBounce 100ms cubic-bezier(0.62, -0.31, 0.29, 1.45);
  transform: scale(1.2);
}

@keyframes rotateBounce {
  0% {
    transform: rotateZ(0deg) scale(1);
  }
  25% {
    transform: rotateZ(-10deg) scale(1.1);
  }
  50% {
    transform: rotateZ(0deg) scale(1.1);
  }
  100% {
    transform: rotateZ(10deg) scale(1.2);
  }
}
</style>
