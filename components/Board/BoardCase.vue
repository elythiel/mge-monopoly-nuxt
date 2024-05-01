<script lang="ts" setup>
import { ref } from 'vue'
import type { CardContent } from '~/types/types'

const props = defineProps<{
  data: CardContent
}>()

const cardComponent = ref()

defineExpose({ openCard, closeCard })
defineEmits<{
  prevCard: [event: MouseEvent]
  nextCard: [event: MouseEvent]
}>()

function openCard(event) {
  if (props.data.card) {
    cardComponent.value.open(event)
  }
}

function closeCard() {
  if (props.data.card) {
    cardComponent.value.close()
  }
}

function getImageSize(image) {
  switch (image.size) {
    case 'xl':
      return 'max-w-[6vw] max-h-[6vw]'
    case 'lg':
      return 'max-w-[6vw] max-h-[6vw]'
    default:
      return 'max-w-[4vw] max-h-[6vw]'
  }
}
</script>

<template>
  <div
    class="board-case shadow-board-sm lg:shadow-board transition-all leading-1.15 transition-transform flex flex-col z-10"
    :class="{ 'cursor-pointer hover:scale-300 lg:hover:scale-110 hover:z-20': data.card }"
    @click="data.card ? openCard($event) : null"
  >
    <div
      v-if="data.color"
      class="shadow-board-sm lg:shadow-board basis-3/12"
      :class="'bg-mge-' + data.color"
    />
    <div class="flex-grow flex flex-col justify-between items-center p-0.5 md:p-1 lg:p-2 break-words md:break-normal">
      <h4
        class="uppercase text-center line-clamp-2 lg:line-clamp-5"
        v-html="data.title"
      />
      <div
        v-if="data.period"
        class="text-center"
      >
        {{ data.period }}
      </div>
      <img
        v-if="data.image"
        :src="'/images/' + data.image.name"
        class="w-auto h-auto m-auto"
        :class="getImageSize(data.image)"
        :alt="data.image.alt"
      >
    </div>
    <Teleport to="body">
      <BoardCard
        v-if="data.card"
        ref="cardComponent"
        :data="data"
        @next-card="(event) => $emit('nextCard', event)"
        @prev-card="(event) => $emit('prevCard', event)"
      />
    </Teleport>
  </div>
</template>

<style scoped>
.board-case:deep(small) {
  @apply block;
  font-size: 0.6em;
}
</style>
