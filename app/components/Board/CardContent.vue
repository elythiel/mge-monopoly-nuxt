<script lang="ts" setup>
import type { BoardCollectionItem } from '@nuxt/content'
import PerfectScrollbar from 'perfect-scrollbar'
import { useTemplateRef } from 'vue'

defineProps<{
  data: BoardCollectionItem
}>()

const element = useTemplateRef('element')

let scrollbar: PerfectScrollbar | null = null

onMounted(() => {
  if (!element.value) {
    return
  }

  scrollbar = new PerfectScrollbar(element.value, {
    wheelPropagation: false,
  })
})
onBeforeUnmount(() => {
  scrollbar?.destroy()
  scrollbar = null
})
</script>

<template>
  <div ref="element" class="prose prose-sm md:prose-base prose-card relative">
    <ClientOnly>
      <ContentRenderer :value="data" />
    </ClientOnly>
  </div>
</template>
