<script lang="ts" setup>
import type { BoardCollectionItem } from '@nuxt/content'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import { ref, useTemplateRef } from 'vue'

defineProps<{
  data: BoardCollectionItem
}>()
defineExpose({ open, close })
defineEmits<{
  prevCard: [event: MouseEvent]
  nextCard: [event: MouseEvent]
}>()

const isActive = ref(false)
const backgroundElement = useTemplateRef('backgroundElement')
const cardElement = useTemplateRef('cardElement')

async function open(event: MouseEvent, from?: 'left' | 'right') {
  gsap.set([backgroundElement.value, cardElement.value], { clearProps: 'all' })

  gsap.fromTo(backgroundElement.value, { opacity: 0 }, { opacity: 1 })

  isActive.value = true

  if (from === 'left') {
    gsap.fromTo(
      cardElement.value,
      { x: '-100%', opacity: 0 },
      { x: 0, opacity: 1 },
    )
  } else if (from === 'right') {
    gsap.fromTo(
      cardElement.value,
      { x: '100%', opacity: 0 },
      { x: 0, opacity: 1 },
    )
  } else {
    gsap.fromTo(
      cardElement.value,
      {
        scale: 0,
        left: event.clientX,
        top: event.clientY,
        rotateX: -120,
        rotateY: 50,
      },
      { scale: 1, left: 0, top: 0, rotateX: 0, rotateY: 0 },
    )
  }
}

function close(to?: 'left' | 'right') {
  gsap.set([backgroundElement.value, cardElement.value], { clearProps: 'all' })

  const tl = gsap
    .timeline()
    .fromTo(
      backgroundElement.value,
      { opacity: 1, duration: 200 },
      { opacity: 0 },
    )
    .eventCallback('onComplete', () => {
      isActive.value = false
    })
  if (to) {
    tl.fromTo(
      cardElement.value,
      { x: 0, scale: 1 },
      { x: to === 'left' ? '-100%' : '100%', scale: 0.5 },
      0,
    )
  } else {
    tl.fromTo(
      cardElement.value,
      { scale: 1, left: 0, top: 0, rotateX: 0, rotateY: 0 },
      { scale: 0, left: '50%', top: '50%', rotateX: -120, rotateY: 50 },
      0,
    )
  }
}
</script>

<template>
  <div v-show="isActive">
    <div
      ref="backgroundElement"
      class="fixed left-0 top-0 z-40 h-full w-full bg-black/50"
      @click="close()"
    />
    <div
      ref="cardElement"
      class="card-wrapper pointer-events-none fixed z-50 flex h-full w-full origin-top-left items-center justify-center font-josefin"
    >
      <div
        class="pointer-events-auto relative h-[90vh] w-[80vw] max-w-xl rounded-lg bg-white p-3 shadow-card md:w-[60vw] 2xl:p-4 portrait:h-[80vh]"
      >
        <div
          class="relative flex h-full flex-col border-2 border-black p-4 2xl:p-5"
        >
          <div
            class="relative mb-8 border-2 border-black font-bold"
            :class="`bg-mge-${data.color}`"
          >
            <span
              v-if="data.duration"
              class="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white p-1 text-center text-sm !leading-none lg:text-xs 2xl:text-base"
            >
              <span>{{ data.duration }}</span>
            </span>
            <h2
              class="card-header px-8 py-3 text-center text-lg font-bold uppercase xl:py-5 2xl:px-12"
              v-html="data.header ?? data.title"
            />
            <span
              v-if="data.location"
              class="absolute bottom-0 right-4 translate-y-1/2 border-2 border-black bg-white p-1 text-center text-xs uppercase xl:text-base 2xl:p-2"
            >
              {{ data.location }}
            </span>
          </div>
          <BoardCardContent :data="data" />
          <span
            v-if="data.footer || data.period"
            class="absolute -bottom-[0.9rem] left-1/2 -translate-x-1/2 bg-white px-2 text-sm 2xl:text-base"
          >
            {{ data.footer ?? data.period }}
          </span>
        </div>
        <button
          type="button"
          class="absolute -right-4 -top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white leading-none text-mge-darkblue shadow-md shadow-black/25"
          title="Fermer la carte"
          @click="close()"
        >
          <X class="size-4" />
        </button>
      </div>
    </div>
    <button
      type="button"
      class="fixed left-0 top-1/2 z-50 -translate-y-1/2 text-white lg:p-4 lg:text-2xl"
      title="Afficher la carte précédente"
      @click="$emit('prevCard', $event)"
    >
      <ChevronLeft class="size-12" />
    </button>
    <button
      type="button"
      class="fixed right-0 top-1/2 z-50 -translate-y-1/2 text-white lg:p-4 lg:text-2xl"
      title="Afficher la carte suivante"
      @click="$emit('nextCard', $event)"
    >
      <ChevronRight class="size-12" />
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.card-wrapper {
  transform-style: preserve-3d;
  perspective: 1500px;
}
.card-header:deep(small) {
  @apply block text-xs;
}
</style>
