<template>
  <div class="board-corner shadow-board w-full justify-end relative overflow-hidden">
    <div class="h-full w-full flex flex-col items-center rotate-45 p-2">
      <span>Création</span>
      <div class="flex-grow p-1 lg:p-3">
        <img src="/images/ico-contract.svg" alt="Pictogramme contrat et plume"
             class="h-full max-h-full w-auto mx-auto"/>
      </div>
      <span>Dashdone</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>

<style scoped>
.board-corner {
  grid-area: 1 / 11 / 2 / 12;
}
</style>
