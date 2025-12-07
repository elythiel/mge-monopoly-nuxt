<script lang="ts" setup>
import RedArrow from '~/assets/images/red-arrow.svg'
</script>

<template>
  <div
    class="board-corner relative flex w-full flex-col items-center justify-end overflow-hidden shadow-board-sm lg:shadow-board"
  >
    <div
      class="absolute left-0 top-0 h-full w-full -rotate-45 px-[12%] py-[24%] text-center uppercase leading-normal lg:py-[6%] lg:portrait:text-[0.75vw]"
    >
      Découvrez <br />mon parcours
      <span class="hidden lg:inline">chaque fois que vous passez ici</span>
      <div class="font-bold lg:landscape:mt-2 lg:text-lg lg:landscape:text-xl">
        Départ
      </div>
    </div>
    <RedArrow
      class="mb-[5%] w-[80%] lg:portrait:w-[70%]"
      :font-controlled="false"
    />
  </div>
</template>

<style scoped>
.board-corner {
  grid-area: 11 / 11 / 12 / 12 !important;
}
</style>
