<script lang="ts" setup>
import BoardCase from './Board/BoardCase.vue'
import { RotateCcw, RotateCw } from 'lucide-vue-next'
import { useAsyncData } from 'nuxt/app'
import { ref, useTemplateRef } from 'vue'

const { data } = await useAsyncData(() =>
  queryCollection('board').order('id', 'ASC').all(),
)

const boardCaseElements = useTemplateRef('boardCaseElements')
const rotation = ref(0)

function openNextCard(event: MouseEvent, index: number) {
  if (boardCaseElements.value && boardCaseElements.value[index]) {
    getNextCard(index)?.openCard(event, 'right')
  }
}

function openPrevCard(event: MouseEvent, index: number) {
  if (boardCaseElements.value && boardCaseElements.value[index]) {
    getPrevCard(index)?.openCard(event, 'left')
  }
}

function getNextCard(index: number) {
  if (!data.value || !boardCaseElements.value) {
    return null
  }

  if (index > (data.value.length ?? 0) - 1) {
    return getNextCard(-1)
  }

  if (data.value[index + 1]?.card) {
    return boardCaseElements.value[index + 1] ?? null
  }

  return getNextCard(index + 1)
}

function getPrevCard(index: number) {
  if (!data.value || !boardCaseElements.value) {
    return null
  }

  if (index < 0) {
    return getPrevCard(data.value.length)
  }

  if (data.value[index - 1]?.card) {
    return boardCaseElements.value[index - 1] ?? null
  }

  return getPrevCard(index - 1)
}

function rotateBoard(direction: number) {
  rotation.value = rotation.value + direction
}
</script>

<template>
  <div
    class="relative mb-4 overflow-hidden bg-white pb-24 pt-20 lg:mb-12 lg:pt-24 2xl:pt-40"
  >
    <div
      class="mx-auto mb-8 flex w-[90vw] items-center justify-between 2xl:mb-12"
    >
      <button
        type="button"
        class="flex items-center justify-center p-2 md:text-2xl"
        title="Tourner le plateau en sens anti-horaire"
        @click="rotateBoard(-1)"
      >
        <RotateCcw class="size-12 stroke-1" />
      </button>
      <h2
        class="text-center font-avante-titul-inline text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl"
      >
        Mon parcours
      </h2>
      <button
        type="button"
        class="flex items-center justify-center p-2 md:text-2xl"
        title="Tourner le plateau en sens horaire"
        @click="rotateBoard(1)"
      >
        <RotateCw class="size-12 stroke-1" />
      </button>
    </div>
    <div
      :style="`transform: rotate(${rotation * 90}deg)`"
      class="board-grid relative mx-auto grid h-[90vw] w-[90vw] grid-cols-board grid-rows-board font-josefin text-[1vw] transition-transform duration-500 lg:text-[0.85vw]"
    >
      <template v-for="(caseData, index) in data" :key="index">
        <BoardCase
          ref="boardCaseElements"
          :data="caseData"
          class="board-case bg-white"
          @next-card="openNextCard($event, index)"
          @prev-card="openPrevCard($event, index)"
        />
      </template>
      <!-- CORNER SQUARES -->
      <BoardStart class="bg-white" />
      <BoardJail class="bg-white" />
      <BoardParking class="bg-white" />
      <BoardPoliceman class="bg-white" />
      <!-- CENTER SQUARE START -->
      <div
        class="board-case-center col-span-9 row-span-9 h-full w-full overflow-hidden bg-transparent transition-transform duration-500"
        :style="`transform: rotate(${-rotation * 90}deg)`"
      >
        <div
          class="flex h-full w-full -rotate-45 flex-col items-center justify-center font-bold"
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
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.board-case-center {
  grid-area: 2 / 2 / 11 / 11 !important;
}

.board-case {
  /* bottom row */

  &:nth-child(1) {
    grid-area: 11 / 10 / 12 / 11;
  }

  &:nth-child(2) {
    grid-area: 11 / 9 / 12 / 10;
  }

  &:nth-child(3) {
    grid-area: 11 / 8 / 12 / 9;
  }

  &:nth-child(4) {
    grid-area: 11 / 7 / 12 / 8;
  }

  &:nth-child(5) {
    grid-area: 11 / 6 / 12 / 7;
  }

  &:nth-child(6) {
    grid-area: 11 / 5 / 12 / 6;
  }

  &:nth-child(7) {
    grid-area: 11 / 4 / 12 / 5;
  }

  &:nth-child(8) {
    grid-area: 11 / 3 / 12 / 4;
  }

  &:nth-child(9) {
    grid-area: 11 / 2 / 12 / 3;
  }

  /* left col */

  &:nth-child(10) {
    grid-area: 10 / 1 / 11 / 2;
  }

  &:nth-child(11) {
    grid-area: 9 / 1 / 10 / 2;
  }

  &:nth-child(12) {
    grid-area: 8 / 1 / 9 / 2;
  }

  &:nth-child(13) {
    grid-area: 7 / 1 / 8 / 2;
  }

  &:nth-child(14) {
    grid-area: 6 / 1 / 7 / 2;
  }

  &:nth-child(15) {
    grid-area: 5 / 1 / 6 / 2;
  }

  &:nth-child(16) {
    grid-area: 4 / 1 / 5 / 2;
  }

  &:nth-child(17) {
    grid-area: 3 / 1 / 4 / 2;
  }

  &:nth-child(18) {
    grid-area: 2 / 1 / 3 / 2;
  }

  /* top row */

  &:nth-child(19) {
    grid-area: 1 / 2 / 2 / 3;
  }

  &:nth-child(20) {
    grid-area: 1 / 3 / 2 / 4;
  }

  &:nth-child(21) {
    grid-area: 1 / 4 / 2 / 5;
  }

  &:nth-child(22) {
    grid-area: 1 / 5 / 2 / 6;
  }

  &:nth-child(23) {
    grid-area: 1 / 6 / 2 / 7;
  }

  &:nth-child(24) {
    grid-area: 1 / 7 / 2 / 8;
  }

  &:nth-child(25) {
    grid-area: 1 / 8 / 2 / 9;
  }

  &:nth-child(26) {
    grid-area: 1 / 9 / 2 / 10;
  }

  &:nth-child(27) {
    grid-area: 1 / 10 / 2 / 11;
  }

  /* right col */

  &:nth-child(28) {
    grid-area: 2 / 11 / 3 / 12;
  }

  &:nth-child(29) {
    grid-area: 3 / 11 / 4 / 12;
  }

  &:nth-child(30) {
    grid-area: 4 / 11 / 5 / 12;
  }

  &:nth-child(31) {
    grid-area: 5 / 11 / 6 / 12;
  }

  &:nth-child(32) {
    grid-area: 6 / 11 / 7 / 12;
  }

  &:nth-child(33) {
    grid-area: 7 / 11 / 8 / 12;
  }

  &:nth-child(34) {
    grid-area: 8 / 11 / 9 / 12;
  }

  &:nth-child(35) {
    grid-area: 9 / 11 / 10 / 12;
  }

  &:nth-child(36) {
    grid-area: 10 / 11 / 11 / 12;
  }

  /* columns elements */

  &:nth-child(n + 10):nth-child(-n + 18),
  &:nth-child(n + 28):nth-child(-n + 36) {
    writing-mode: vertical-rl;
    text-orientation: mixed;

    &:deep(img) {
      @apply rotate-90;
    }
  }

  /* top row elements */
  /* right column elements */

  &:nth-child(n + 19):nth-child(-n + 27),
  &:nth-child(n + 28):nth-child(-n + 36) {
    @apply rotate-180;
  }
}
</style>
