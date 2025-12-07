<script lang="ts" setup>
import Tools from '~/assets/images/tools.svg'
</script>

<template>
  <div
    class="board-corner grid-board-jail relative grid w-full grid-cols-[20%_1fr] grid-rows-[80%_1fr] items-center justify-end overflow-hidden shadow-board-sm transition-all lg:shadow-board"
  >
    <div
      class="col-start-2 flex items-center justify-center place-self-stretch overflow-hidden bg-mge-orange shadow-board-sm lg:shadow-board"
    >
      <Tools
        class="h-[70%] w-auto max-w-[70%] rotate-45"
        :font-controlled="false"
      />
    </div>
    <div class="left-zone flex items-center justify-center uppercase">
      Période
    </div>
    <div class="bottom-zone items-center justify-center uppercase">
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
