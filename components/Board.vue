<template>
  <div id="monopoly" class="relative bg-white pt-20 pb-12 mb-4 lg:pt-24 lg:pb-28 lg:mb-12 2xl:pt-40 2xl:pb-28">
    <h2 class="font-avante-titul-inline text-center text-4xl lg:text-6xl mb-8 2xl:text-7xl 2xl:mb-12">
      Mon parcours
    </h2>
    <div
      class="board-grid font-josefin w-[90vw] h-[90vw] mx-auto grid grid-cols-board grid-rows-board relative uppercase text-[0.85vw]">
      <template v-for="(card, index) in cards.datas">
        <BoardStart v-if="card.corner === 'start'" :card="card"/>
        <BoardJail v-else-if="card.corner === 'jail'" :card="card"/>
        <BoardParking v-else-if="card.corner === 'parking'" :card="card"/>
        <BoardPoliceman v-else-if="card.corner === 'policeman'" :card="card"/>
        <BoardCase v-else :card="card" />
      </template>
      <!-- CENTER SQUARE START -->
      <div class="board-case-center col-span-9 bg-transparent row-span-9 overflow-hidden w-full h-full">
        <div class="font-bold flex flex-col items-center justify-center -rotate-45 w-full h-full">
          <h2 class="normal-case text-xs lg:text-xl 2xl:text-2xl">
            Curriculum Vitae - Morgane
          </h2>
          <h1 class="rounded lg:rounded-lg bg-mge-darkblue text-white text-3xl px-4 pt-3 pb-1 lg:px-12 lg:pt-8 lg:pb-3 lg:text-8xl 2xl:px-16 2xl:pt-10 2xl:pb-4 2xl:text-9xl">
            GERVASONI
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BoardCase from "./board/BoardCase";
import BoardStart from "./board/BoardStart";
import BoardJail from "./board/BoardJail";
import BoardParking from "./board/BoardParking";
import BoardPoliceman from "./board/BoardPoliceman";

export default {
  components: {BoardPoliceman, BoardCase, BoardStart, BoardJail, BoardParking},
  data() {
    return {
      cards: [],
    };
  },
  async fetch() {
    this.cards = await this.$content("board").fetch();
  }
}
</script>

<style>
.board-grid > .board-case-center {
  grid-area: 2 / 2 / 11 / 11;
}

/* bottom row */
.board-grid > *:nth-child(2) {
  grid-area: 11 / 10 / 12 / 11;
}

.board-grid > *:nth-child(3) {
  grid-area: 11 / 9 / 12 / 10;
}

.board-grid > *:nth-child(4) {
  grid-area: 11 / 8 / 12 / 9;
}

.board-grid > *:nth-child(5) {
  grid-area: 11 / 7 / 12 / 8;
}

.board-grid > *:nth-child(6) {
  grid-area: 11 / 6 / 12 / 7;
}

.board-grid > *:nth-child(7) {
  grid-area: 11 / 5 / 12 / 6;
}

.board-grid > *:nth-child(8) {
  grid-area: 11 / 4 / 12 / 5;
}

.board-grid > *:nth-child(9) {
  grid-area: 11 / 3 / 12 / 4;
}

.board-grid > *:nth-child(10) {
  grid-area: 11 / 2 / 12 / 3;
}

/* left col */
.board-grid > *:nth-child(12) {
  grid-area: 10 / 1 / 11 / 2;
}

.board-grid > *:nth-child(13) {
  grid-area: 9 / 1 / 10 / 2;
}

.board-grid > *:nth-child(14) {
  grid-area: 8 / 1 / 9 / 2;
}

.board-grid > *:nth-child(15) {
  grid-area: 7 / 1 / 8 / 2;
}

.board-grid > *:nth-child(16) {
  grid-area: 6 / 1 / 7 / 2;
}

.board-grid > *:nth-child(17) {
  grid-area: 5 / 1 / 6 / 2;
}

.board-grid > *:nth-child(18) {
  grid-area: 4 / 1 / 5 / 2;
}

.board-grid > *:nth-child(19) {
  grid-area: 3 / 1 / 4 / 2;
}

/* top row */
.board-grid > *:nth-child(21) {
  grid-area: 1 / 1 / 2 / 2;
}

.board-grid > *:nth-child(22) {
  grid-area: 1 / 2 / 2 / 3;
}

.board-grid > *:nth-child(23) {
  grid-area: 1 / 3 / 2 / 4;
}

.board-grid > *:nth-child(24) {
  grid-area: 1 / 4 / 2 / 5;
}

.board-grid > *:nth-child(25) {
  grid-area: 1 / 5 / 2 / 6;
}

.board-grid > *:nth-child(26) {
  grid-area: 1 / 6 / 2 / 7;
}

.board-grid > *:nth-child(27) {
  grid-area: 1 / 7 / 2 / 8;
}

.board-grid > *:nth-child(28) {
  grid-area: 1 / 8 / 2 / 9;
}

.board-grid > *:nth-child(29) {
  grid-area: 1 / 9 / 2 / 10;
}

.board-grid > *:nth-child(30) {
  grid-area: 1 / 10 / 2 / 11;
}

/* right col */
.board-grid > *:nth-child(32) {
  grid-area: 2 / 11 / 3 / 12;
}

.board-grid > *:nth-child(33) {
  grid-area: 3 / 11 / 4 / 12;
}

.board-grid > *:nth-child(34) {
  grid-area: 4 / 11 / 5 / 12;
}

.board-grid > *:nth-child(35) {
  grid-area: 5 / 11 / 6 / 12;
}

.board-grid > *:nth-child(36) {
  grid-area: 6 / 11 / 7 / 12;
}

.board-grid > *:nth-child(37) {
  grid-area: 7 / 11 / 8 / 12;
}

.board-grid > *:nth-child(38) {
  grid-area: 8 / 11 / 9 / 12;
}

.board-grid > *:nth-child(39) {
  grid-area: 9 / 11 / 10 / 12;
}

.board-grid > *:nth-child(40) {
  grid-area: 10 / 11 / 11 / 12;
}

.board-grid > * {
  background-color: white;
}

/* cases content */
/* top row elements */
.board-grid > *:nth-child(n+21):nth-child(-n+31) {
  @apply rotate-180;
}

/* columns elements */
.board-grid > *:nth-child(n+12):nth-child(-n+20),
.board-grid > *:nth-child(n+32):nth-child(-n+40) {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.board-grid > *:nth-child(n+12):nth-child(-n+20) img,
.board-grid > *:nth-child(n+32):nth-child(-n+40) img {
  @apply rotate-90;
}

/* right column elements */
.board-grid > *:nth-child(n+32):nth-child(-n+40) {
  @apply rotate-180;
}
</style>
