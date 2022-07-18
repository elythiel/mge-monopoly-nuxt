<template>
  <div v-if="initialized" v-show="isActive">
    <div ref="background"
         class="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
         @click="close"
    ></div>
    <div ref="element"
         class="card-wrapper font-josefin fixed w-full h-full z-50 flex items-center justify-center pointer-events-none origin-top-left">
      <div class="card p-3 2xl:p-4 portrait:h-[80vh] portrait:w-[80vw] w-[60vh] h-[90vh] rounded-lg bg-white shadow-card pointer-events-auto">
        <div class="relative flex flex-col p-4 2xl:p-5 border-2 border-black h-full">
          <div class="font-bold border-2 border-black mb-8 relative" :class="`bg-mge-${card.color}`">
            <span v-if="card.duration"
                  class="absolute flex items-center justify-center p-1 text-center border-2 !leading-none border-black text-sm w-12 h-12 lg:text-xs 2xl:text-base -top-4 -left-4 rounded-full bg-white">
              <span>{{ card.duration }}</span>
            </span>
            <h2 class="font-bold uppercase py-3 2xl:py-4 px-8 2xl:px-12 text-center text-lg"
                v-html="card.header ?? card.title"></h2>
            <span
                class="absolute border-2 border-black text-center text-sm lg:text-xs 2xl:text-base bottom-0 translate-y-1/2 right-4 bg-white uppercase p-1 2xl:p-2"
                v-if="card.location"
            >
              {{ card.location }}
            </span>
          </div>
          <div ref="content" class="relative prose prose-card">
              <ContentDoc v-if="card.content" :path="`cards/${card.content}`">
                <template #not-found>
                  <p class="text-center">Expérience introuvable</p>
                </template>
                <template #empty>
                  <BoardCardLoader />
                </template>
              </ContentDoc>
          </div>
          <span v-if="card.footer || card.period"
                class="absolute -bottom-[0.9rem] bg-white px-2 left-1/2 -translate-x-1/2 text-sm 2xl:text-base">
            {{ card.footer ?? card.period }}
          </span>
        </div>
      </div>
    </div>
    <button type="button" class="fixed text-white left-0 top-1/2 -translate-y-1/2 z-50 lg:text-2xl lg:p-4"
            title="Afficher la carte précédente"
            @click="$emit('prevCard', $event)">
      <vue-feather type="chevron-left" size="3em"></vue-feather>
    </button>
    <button type="button" class="fixed text-white right-0 top-1/2 -translate-y-1/2 z-50 lg:text-2xl lg:p-4"
            title="Afficher la carte suivante"
            @click="$emit('nextCard', $event)">
      <vue-feather type="chevron-right" size="3em"></vue-feather>
    </button>
  </div>
</template>

<script setup>
import VueFeather from 'vue-feather';
import {gsap} from 'gsap';
import {nextTick, ref} from 'vue';
import PerfectScrollbar from "perfect-scrollbar";

defineProps({
  card: Object
});

const initialized = ref(false);
const isActive = ref(false);
const background = ref(null);
const element = ref(null);
const content = ref(null);

let animation = null;
let scrollbar = null;

async function initialize() {
  initialized.value = true;
  await nextTick();
  scrollbar = new PerfectScrollbar(content.value, {
    wheelPropagation: false
  });
}

async function open (event) {
  if (!initialized.value) {
    await initialize();
  }
  scrollbar.update();
  isActive.value = true;
  animation = gsap.timeline({delay: 0.1});
  animation.fromTo(background.value, {opacity: 0}, {opacity: 1});
  animation.fromTo(
      element.value,
      {scale: 0, left: event.clientX, top: event.clientY, rotateX: -120, rotateY: 50},
      {scale: 1, left: 0, top: 0, rotateX: 0, rotateY: 0},
      '<'
  );
  animation.eventCallback('onReverseComplete', () => isActive.value = false);
}

function close() {
  animation ? animation.reverse() : isActive.value = false;
}

defineExpose({open, close});
</script>

<style scoped>
.card-wrapper {
  transform-style: preserve-3d;
  perspective: 1500px;
}
</style>
