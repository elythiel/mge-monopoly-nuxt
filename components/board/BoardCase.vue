<template>
  <div class="board-case shadow-board transition-all leading-1.15 transition-transform flex flex-col z-10"
       v-bind:class="{'cursor-pointer hover:scale-110 hover:z-20': card.details}"
       @click="card.details ? $refs.cardComponent.open($event) : null"
  >
    <div v-if="card.color"
         :class="'shadow-board basis-3/12 bg-mge-' + card.color"
    ></div>
    <div class="flex-grow flex flex-col justify-between items-center p-2">
      <h4 class="uppercase text-center" v-html="card.title"></h4>
      <div v-if="card.date"
           class="text-center">
        {{ card.date }}
      </div>
      <img v-if="card.image"
           :src="'/images/' + card.image.name"
           class="w-auto h-auto m-auto"
           v-bind:class="{'card-image-xl': card.image.size === 'xl', 'card-image-lg': card.image.size === 'lg'}"
           :alt="card.image.alt"
      />
    </div>
    <portal to="cards">
      <Card :card="card" v-if="card.details" ref="cardComponent" />
    </portal>
  </div>
</template>

<script>
import {Portal} from "portal-vue";
import Card from "./Card";
export default {
  components: {Card, Portal},
  props: {
    card: Object
  }
}
</script>

<style>
.board-case .text-xs,
.board-corner .text-xs
{
  font-size: 0.6vw;
  line-height: 1.15;
}
.board-case img {
  @apply max-w-[4vw] max-h-[6vw];
}
.card-image-lg {
  @apply max-w-[5vw] max-h-[5vw] !important;
}
.card-image-xl {
  @apply max-w-[6vw] max-h-[6vw] !important;
}
</style>
