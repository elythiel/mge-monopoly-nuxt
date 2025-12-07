<script lang="ts" setup>
import RedArrow from '~/assets/images/red-arrow.svg'
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center md:justify-end md:overflow-hidden border-2 border-black md:border-none md:shadow-board-sm lg:shadow-board"
  >
    <div
      class="md:absolute md:left-0 md:top-0 md:h-full md:w-full md:-rotate-45 md:px-[12%] md:py-[24%] text-center uppercase leading-normal lg:py-3 lg:portrait:text-[0.75vw]"
    >
      Découvrez <br />mon parcours
      <span class="md:hidden lg:inline">chaque fois que vous passez ici</span>
      <div class="font-bold lg:landscape:mt-2 lg:text-lg lg:landscape:text-xl">
        Départ
      </div>
    </div>
    <RedArrow
      class="mt-6 md:mt-0 md:mb-1 lg:mb-2 w-4/5 lg:portrait:w-8/12 rotate-180 md:rotate-0"
      :font-controlled="false"
    />
  </div>
</template>
