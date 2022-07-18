<template>
  <div class="board-corner w-full justify-end relative overflow-hidden shadow-board-sm lg:shadow-board rotate-180 uppercase">
    <div class="h-full w-full flex flex-col items-center -rotate-45 p-2">
      <span>Voyages</span>
      <div class="flex-grow p-1 lg:p-3">
        <img src="/images/ico-photo.svg" alt="Pictogramme appareil photo" class="h-full max-h-full w-auto mx-auto"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board-corner {
  grid-area: 1 / 1 / 2 / 2 !important;
}
</style>
