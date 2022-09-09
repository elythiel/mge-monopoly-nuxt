<template>
  <div class="overflow-hidden relative bg-white pt-20 pb-12 mb-4 lg:pt-24 lg:pb-28 lg:mb-12 2xl:pt-40 2xl:pb-28">
    <div class="flex justify-between w-[90vw] mx-auto items-center mb-8 2xl:mb-12">
      <button type="button"
              @click="rotateBoard(-1)"
              class="p-2 md:text-2xl flex items-center justify-center"
              title="Tourner le plateau">
        <vue-feather type="rotate-ccw" stroke-width="1" size="2em"></vue-feather>
      </button>
      <h2 class="font-avante-titul-inline text-center text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">
        Mon parcours
      </h2>
      <button type="button"
              @click="rotateBoard(1)"
              class="p-2 md:text-2xl flex items-center justify-center"
              title="Tourner le plateau">
        <vue-feather type="rotate-cw" stroke-width="1" size="2em"></vue-feather>
      </button>
    </div>
    <div :style="`transform: rotate(${rotation * 90}deg)`"
         class="board-grid font-josefin w-[90vw] h-[90vw] mx-auto text-[1vw] lg:text-[0.85vw] grid grid-cols-board grid-rows-board relative transition-transform duration-500">
      <template v-for="(caseData, index) in data">
        <BoardCase ref="boardCases" :data="caseData" class="board-case bg-white"
                   @next-card="(event) => openNextCard(event, index)"
                   @prev-card="(event) => openPrevCard(event, index)"
        />
      </template>
      <!-- CORNER SQUARES -->
      <BoardStart class="bg-white"/>
      <BoardJail class="bg-white"/>
      <BoardParking class="bg-white"/>
      <BoardPoliceman class="bg-white"/>
      <!-- CENTER SQUARE START -->
      <div class="board-case-center col-span-9 bg-transparent row-span-9 overflow-hidden w-full h-full transition-transform duration-500"
           :style="`transform: rotate(${-rotation * 90}deg)`">
        <div class="font-bold flex flex-col items-center justify-center -rotate-45 w-full h-full">
          <h2 class="normal-case text-xs lg:text-xl 2xl:text-2xl">
            Curriculum Vitae - Morgane
          </h2>
          <h1 class="rounded lg:rounded-lg bg-mge-darkblue text-white text-3xl md:text-4xl lg:text-6xl px-4 pt-3 pb-1 lg:px-12 lg:pt-8 lg:pb-3 lg:text-8xl 2xl:px-16 2xl:pt-10 2xl:pb-4 2xl:text-9xl">
            GERVASONI
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import VueFeather from "vue-feather";
import {ref} from "vue";

const {data} = await useAsyncData('cards-list', () => queryContent('card').find());
const boardCases = ref();
const rotation = ref(0);

function openNextCard(event, index) {
  boardCases.value[index].closeCard();
  getNextCard(index).openCard(event);
}

function openPrevCard(event, index) {
  boardCases.value[index].closeCard();
  getPrevCard(index).openCard(event);
}

function getNextCard(index) {
  if (index >= data.value.length - 1) {
    return getNextCard(0);
  }
  if (data.value[index + 1]?.card) {
    return boardCases.value[index + 1];
  }

  return getNextCard(index + 1);
}

function getPrevCard(index) {
  if (index <= 0) {
    return getPrevCard(data.value.length);
  }
  if (data.value[index - 1]?.card) {
    return boardCases.value[index - 1];
  }

  return getPrevCard(index - 1);
}

function rotateBoard(direction) {
  rotation.value = rotation.value + direction;
}
</script>

<style scoped>
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

  &:nth-child(n+10):nth-child(-n+18),
  &:nth-child(n+28):nth-child(-n+36) {
    writing-mode: vertical-rl;
    text-orientation: mixed;

    &:deep(img) {
      @apply rotate-90;
    }
  }

  /* top row elements */
  /* right column elements */

  &:nth-child(n+19):nth-child(-n+27),
  &:nth-child(n+28):nth-child(-n+36) {
    @apply rotate-180;
  }
}
</style>
