<script lang="ts" setup>
import type { BoardCollectionItem } from '@nuxt/content'
import type { CardContentImage } from '~/types/types'

defineProps<{
  data: BoardCollectionItem
}>()

function getImageSize({ size }: CardContentImage) {
  switch (size) {
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
    class="board-case leading-1.15 z-10 flex flex-col shadow-board-sm transition-all lg:shadow-board"
    :class="{
      'cursor-pointer hover:z-20 hover:scale-300 md:hover:scale-150 lg:hover:scale-110':
        data.card,
    }"
  >
    <div
      v-if="data.color"
      class="basis-3/12 shadow-board-sm lg:shadow-board"
      :class="'bg-mge-' + data.color"
    />
    <div
      class="flex flex-grow flex-col items-center justify-between break-words p-0.5 md:break-normal md:p-1 lg:p-2"
    >
      <h4
        class="line-clamp-2 text-center uppercase lg:line-clamp-5"
        v-html="data.title"
      />
      <div v-if="data.period" class="text-center">
        {{ data.period }}
      </div>
      <img
        v-if="data.image"
        :src="'/images/' + data.image.name"
        class="m-auto h-auto w-auto"
        :class="getImageSize(data.image)"
        :alt="data.image.alt"
      />
    </div>
  </div>
</template>

<style scoped>
.board-case:deep(small) {
  display: block;
  font-size: 0.6em;
}
</style>
