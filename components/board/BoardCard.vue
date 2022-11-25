<template>
  <div
    v-if="initialized"
    v-show="isActive"
  >
    <div
      ref="background"
      class="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
      @click="close"
    />
    <div
      ref="element"
      class="card-wrapper font-josefin fixed w-full h-full z-50 flex items-center justify-center pointer-events-none origin-top-left"
    >
      <div
        ref="cardElement"
        tabindex="0"
        class="relative p-3 2xl:p-4 portrait:h-[80vh] w-[80vw] md:w-[60vw] h-[90vh] max-w-xl rounded-lg bg-white shadow-card pointer-events-auto"
      >
        <button
          type="button"
          class="absolute -right-4 -top-4 shadow-md shadow-black/25 w-10 h-10 flex items-center justify-center bg-white text-mge-darkblue rounded-full z-50 leading-none"
          title="Fermer la carte"
          @click="close()"
        >
          <vue-feather
            type="x"
            size="1em"
          />
        </button>
        <div class="relative flex flex-col p-4 2xl:p-5 border-2 border-black h-full">
          <div
            class="font-bold border-2 border-black mb-8 relative"
            :class="`bg-mge-${data.color}`"
          >
            <span
              v-if="data.duration"
              class="absolute flex items-center justify-center p-1 text-center border-2 !leading-none border-black text-sm w-12 h-12 lg:text-xs 2xl:text-base -top-4 -left-4 rounded-full bg-white"
            >
              <span>{{ data.duration }}</span>
            </span>
            <h2
              class="card-header font-bold uppercase py-3 xl:py-5 px-8 2xl:px-12 text-center text-lg"
              v-html="data.header ?? data.title"
            />
            <span
              v-if="data.location"
              class="absolute border-2 border-black text-center text-xs xl:text-base bottom-0 translate-y-1/2 right-4 bg-white uppercase p-1 2xl:p-2"
            >
              {{ data.location }}
            </span>
          </div>
          <div
            ref="content"
            tabindex="0"
            class="relative prose prose-base prose-card"
          >
            <ContentRenderer :value="data">
              <ContentRendererMarkdown :value="data" />
            </ContentRenderer>
          </div>
          <span
            v-if="data.footer || data.period"
            class="absolute -bottom-[0.9rem] bg-white px-2 left-1/2 -translate-x-1/2 text-sm 2xl:text-base"
          >
            {{ data.footer ?? data.period }}
          </span>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="fixed text-white left-0 top-1/2 -translate-y-1/2 z-50 lg:text-2xl lg:p-4"
      title="Afficher la carte précédente"
      @click="$emit('prevCard', $event)"
    >
      <vue-feather
        type="chevron-left"
        size="3em"
      />
    </button>
    <button
      type="button"
      class="fixed text-white right-0 top-1/2 -translate-y-1/2 z-50 lg:text-2xl lg:p-4"
      title="Afficher la carte suivante"
      @click="$emit('nextCard', $event)"
    >
      <vue-feather
        type="chevron-right"
        size="3em"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import VueFeather from 'vue-feather';
import { gsap } from 'gsap';
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import PerfectScrollbar from 'perfect-scrollbar';
import { Card } from '~/types';

defineProps<{
  data: Card
}>();

const initialized = ref(false);
const isActive = ref(false);
const background = ref();
const element = ref();
const cardElement = ref();
const content = ref();

let animation: GSAPTimeline|null = null;
let scrollbar: PerfectScrollbar|null = null;

defineEmits(['prevCard', 'nextCard']);

async function initialize() {
  initialized.value = true;
  await nextTick();
  scrollbar = new PerfectScrollbar(content.value, {
    wheelPropagation: false
  });
}

async function open(event: MouseEvent) {
  if (!initialized.value) {
    await initialize();
  }
  if (isActive.value) {
    return;
  }
  scrollbar?.update();
  isActive.value = true;
  animation = gsap.timeline({ delay: 0.1 });
  animation.fromTo(background.value, { opacity: 0 }, { opacity: 1 });
  animation.fromTo(
    element.value,
    { scale: 0, left: event.clientX, top: event.clientY, rotateX: -120, rotateY: 50 },
    { scale: 1, left: 0, top: 0, rotateX: 0, rotateY: 0 },
    '<'
  );
  animation.eventCallback('onReverseComplete', () => {
    isActive.value = false;
  });
  await nextTick();
  cardElement.value.focus();
  document.body.classList.add('overflow-hidden');
}

function close() {
  animation ? animation.reverse() : isActive.value = false;
  document.body.classList.remove('overflow-hidden');
}

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  document.body.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
  document.body.removeEventListener('keydown', closeOnEscape);
});

defineExpose({ open, close });
</script>

<style scoped>
.card-wrapper {
  transform-style: preserve-3d;
  perspective: 1500px;
}
.card-header:deep(small) {
  @apply block text-xs;
}
</style>
