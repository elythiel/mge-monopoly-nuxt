<template>
  <div
    class="board-corner shadow-board-sm lg:shadow-board grid-board-jail transition-all transition-transform w-full items-center justify-end relative overflow-hidden grid grid-rows-[80%_1fr] grid-cols-[20%_1fr]">
    <div
      class="shadow-board-sm lg:shadow-board col-start-2 flex items-center justify-center bg-mge-orange overflow-hidden place-self-stretch">
      <img src="/images/ico-tool.svg" class="rotate-45 w-auto h-[70%] max-w-[70%]" alt="Pictogramme outils"/>
    </div>
    <div class="left-zone uppercase flex items-center justify-center">
      Période
    </div>
    <div class="bottom-zone uppercase items-center justify-center">
      D'Alternance
    </div>
  </div>
</template>

<style scoped>
.left-zone {
  grid-area: 1 / 1 / 2 / 2;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.bottom-zone {
  grid-area: 2 / 2 / 3 / 3;
}

.board-corner {
  grid-area: 11 / 1 / 12 / 2 !important;
}
</style>
