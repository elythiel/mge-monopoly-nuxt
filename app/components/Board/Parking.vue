<script lang="ts" setup>
import Photos from '~/assets/images/photos.svg'
</script>

<template>
  <div
    class="border-2 border-black md:border-none md:shadow-board-sm lg:shadow-board"
  >
    <div
      class="relative w-full h-full rotate-180 justify-end overflow-hidden uppercase"
    >
      <div class="flex h-full w-full -rotate-45 flex-col items-center p-2">
        <span>Voyages</span>
        <div class="flex-grow p-1 lg:p-3">
          <Photos
            class="mx-auto h-full max-h-full w-auto"
            :font-controlled="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>
