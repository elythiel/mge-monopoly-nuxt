<script lang="ts" setup>
import type { CardContent } from '~/types/types'
import CustomScrollbar from '~/components/Common/CustomScrollbar.vue'

defineProps<{
  content: CardContent
}>()
</script>

<template>
  <div class="p-3 2xl:p-4 rounded-lg bg-white">
    <div class="relative flex flex-col p-4 2xl:p-5 border-2 border-black h-full">
      <div
        class="font-bold border-2 border-black mb-8 relative"
        :class="`bg-mge-${content.color}`"
      >
        <span
          v-if="content.duration"
          class="absolute flex items-center justify-center p-1 text-center border-2 !leading-none border-black text-sm w-12 h-12 lg:text-xs 2xl:text-base -top-4 -left-4 rounded-full bg-white"
        >
          <span>{{ content.duration }}</span>
        </span>
        <h2
          class="card-header font-bold uppercase py-3 xl:py-5 px-8 2xl:px-12 text-center text-lg"
          v-html="content.header ?? content.title"
        />
        <span
          v-if="content.location"
          class="absolute border-2 border-black text-center text-xs xl:text-base bottom-0 translate-y-1/2 right-4 bg-white uppercase p-1 2xl:p-2"
        >
          {{ content.location }}
        </span>
      </div>
      <CustomScrollbar class="prose prose-base prose-card">
        <ContentRenderer :value="content" />
      </CustomScrollbar>
      <span
        v-if="content.footer || content.period"
        class="absolute -bottom-[0.9rem] bg-white px-2 left-1/2 -translate-x-1/2 text-sm 2xl:text-base whitespace-nowrap"
      >
        {{ content.footer ?? content.period }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.card-header:deep(small) {
  @apply block text-xs;
}
</style>
