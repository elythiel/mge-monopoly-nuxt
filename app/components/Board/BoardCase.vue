<script lang="ts" setup>
import type { BoardCollectionItem } from '@nuxt/content'

defineProps<{
  data: BoardCollectionItem
  side?: 'top' | 'bottom' | 'left' | 'right'
}>()

defineEmits<{
  'click:case': [event: PointerEvent, id: string]
}>()
</script>

<template>
  <div
    class="board-case group bg-white relative leading-1.15 z-10 flex flex-col rounded-md md:rounded-none border-2 border-black overflow-hidden md:overflow-auto md:border-0 transition-all md:shadow-board-sm lg:shadow-board"
    :class="{
      'md:hover:z-20 md:hover:scale-150 lg:hover:scale-110 md:hover:rounded-md':
        data.card,
      'md:rotate-180': side === 'top' || side === 'right',
    }"
  >
    <button
      v-if="data.card"
      type="button"
      title="Afficher plus d'informations"
      class="absolute inset-0"
      @click="$emit('click:case', $event, data.id)"
    />
    <div
      v-if="data.color"
      class="basis-3/12 border-b-2 border-black md:border-none md:shadow-board-sm lg:shadow-board transition-all"
      :class="[
        'bg-mge-' + data.color,
        {
          'group-hover:md:rounded-t-md': side === 'top' || side === 'bottom',
          'group-hover:md:rounded-r-md': side === 'left' || side === 'right',
        },
      ]"
    />
    <div
      class="flex flex-grow flex-col items-center justify-between break-words p-4 md:break-normal md:p-1 lg:p-2"
    >
      <h4
        class="md:line-clamp-2 text-center uppercase lg:line-clamp-5"
        v-html="data.title"
      />
      <div v-if="data.period" class="text-center">
        {{ data.period }}
      </div>
      <img
        v-if="data.image"
        :src="'/images/' + data.image.name"
        class="m-auto h-auto w-auto max-w-[50%] max-h-[50%]"
        :class="[
          {
            'md:max-w-[6vw] md:max-h-[6vw]':
              data.image.size === 'xl' || data.image.size === 'lg',
            'md:max-w-[4vw] md:max-h-[6vw]':
              data.image.size !== 'xl' && data.image.size !== 'lg',
            'md:rotate-90': side === 'left' || side === 'right',
          },
        ]"
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
