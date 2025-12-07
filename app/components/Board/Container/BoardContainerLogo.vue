<script lang="ts" setup>
defineProps<{ rotation: number }>()
</script>
<template>
  <div
    class="md:absolute inset-0 h-full w-full overflow-hidden bg-transparent transition-transform duration-500"
    :style="`transform: rotate(${-rotation * 90}deg)`"
  >
    <div
      class="flex h-full w-full md:-rotate-45 flex-col items-center justify-center font-bold"
    >
      <h2 class="text-xs normal-case lg:text-xl 2xl:text-2xl">
        Curriculum Vitae - Morgane
      </h2>
      <h1
        class="rounded bg-mge-darkblue px-4 pb-1 pt-3 text-3xl text-white md:text-4xl lg:rounded-lg lg:px-12 lg:pb-3 lg:pt-8 lg:text-8xl 2xl:px-16 2xl:pb-4 2xl:pt-10 2xl:text-9xl"
      >
        GERVASONI
      </h1>
    </div>
  </div>
</template>
