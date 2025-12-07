<script lang="ts" setup>
import Contract from '~/assets/images/contract.svg'
</script>

<template>
  <div
    class="board-corner relative w-full rotate-180 justify-end overflow-hidden uppercase shadow-board-sm lg:shadow-board"
  >
    <div class="flex h-full w-full rotate-45 flex-col items-center p-2">
      <span>Création</span>
      <div class="flex-grow p-1 lg:p-3">
        <Contract
          class="mx-auto h-full max-h-full w-auto"
          :font-controlled="false"
        />
      </div>
      <span>Dashdone</span>
    </div>
  </div>
</template>

<style scoped>
.board-corner {
  grid-area: 1 / 11 / 2 / 12 !important;
}
</style>
