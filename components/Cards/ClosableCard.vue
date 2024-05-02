<script lang="ts" setup>
import VueFeather from 'vue-feather'
import { gsap } from 'gsap'
import { ref } from 'vue'
import type { CardContent } from '~/types/types'
import SwitchButton from '~/components/Cards/SwitchButton.vue'
import SimpleCard from '~/components/Cards/SimpleCard.vue'

defineProps<{
  data: CardContent
}>()
defineExpose({ open, close })
defineEmits<{
  prevCard: [event: MouseEvent]
  nextCard: [event: MouseEvent]
}>()

const isActive = ref(false)
const backgroundElement = ref<HTMLElement>()
const cardElement = ref<HTMLElement>()

const animateFrom = ref({ top: 0, left: 0 })

async function open(event: MouseEvent) {
  animateFrom.value.left = event.clientX
  animateFrom.value.top = event.clientY
  isActive.value = true
}

function close() {
  isActive.value = false
}

function animateOpen(el, done) {
  gsap
    .timeline({ delay: 0.1, onComplete: done })
    .fromTo(backgroundElement.value as HTMLElement, { opacity: 0 }, { opacity: 1 })
    .fromTo(
      cardElement.value as HTMLElement,
      { scale: 0, top: animateFrom.value.top, left: animateFrom.value.left, rotateX: -120, rotateY: 50 },
      { scale: 1, left: 0, top: 0, rotateX: 0, rotateY: 0 },
      '<',
    )
}

function animateClose(el, done) {
  gsap.to(el, {
    opacity: 0,
    onComplete: done,
  })
}
</script>

<template>
  <Transition
    :css="false"
    @enter="animateOpen"
    @leave="animateClose"
  >
    <div
      v-if="isActive"
      class="fixed top-0 left-0 w-full h-full z-40"
    >
      <div
        ref="backgroundElement"
        class="absolute w-full h-full bg-black/50"
        @click="close"
      />
      <div
        ref="cardElement"
        class="card-wrapper font-josefin absolute w-full h-full flex items-center justify-center pointer-events-none origin-top-left"
      >
        <div class="relative portrait:h-[80vh] w-[80vw] md:w-[60vw] h-[90vh] max-w-xl pointer-events-auto">
          <SimpleCard
            :content="data"
            class="shadow-card w-full h-full"
          />
          <button
            type="button"
            class="absolute -right-4 -top-4 shadow-md shadow-black/25 w-10 h-10 flex items-center justify-center bg-white text-mge-darkblue rounded-full z-50 leading-none"
            title="Fermer la carte"
            @click="close"
          >
            <VueFeather
              type="x"
              size="1em"
            />
          </button>
        </div>
      </div>
      <SwitchButton
        type="prev"
        class="fixed text-white top-1/2 left-0 -translate-y-1/2 lg:text-2xl lg:p-4"
        @click="$emit('prevCard', $event)"
      />
      <SwitchButton
        type="next"
        class="fixed text-white top-1/2 right-0 -translate-y-1/2 lg:text-2xl lg:p-4"
        @click="$emit('nextCard', $event)"
      />
    </div>
  </Transition>
</template>

<style scoped>
.card-wrapper {
  transform-style: preserve-3d;
  perspective: 1500px;
}
</style>
