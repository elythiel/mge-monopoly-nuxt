<template>
  <div class="board-corner shadow-board-sm lg:shadow-board w-full flex flex-col items-center justify-end relative overflow-hidden">
    <div class="leading-normal absolute top-0 left-0 text-center w-full h-full py-[24%] lg:py-[6%] px-[12%] uppercase -rotate-45">
      Découvrez <br>mon parcours<span class="hidden lg:inline"> chaque fois que vous passez ici</span>
      <div class="font-bold lg:text-xl lg:mt-2">Départ</div>
    </div>
    <img class="block max-w-[80%] mb-[5%]" src="/images/ico-arrow.svg" alt="Pictogramme flèche départ"/>
  </div>
</template>

<style scoped>
.board-corner {
  grid-area: 11 / 11 / 12 / 12 !important;
}
</style>
