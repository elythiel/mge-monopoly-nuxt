<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'
import { useBreakpoints } from '~/composables/breakpoints'

const element = ref<HTMLDivElement>()
const scrollbar = ref<PerfectScrollbar>()
const { isSm } = useBreakpoints()

onMounted(loadScrollBar)
onBeforeUnmount(() => {
  scrollbar.value?.destroy()
})

async function loadScrollBar() {
  if (!isSm && !scrollbar.value) {
    scrollbar.value = new PerfectScrollbar(element.value as HTMLElement, {
      wheelPropagation: false,
    })
  }
  await nextTick()
  scrollbar.value?.update()
}
</script>

<template>
  <div
    ref="element"
    class="relative"
    :class="{ 'overflow-y-auto': isSm }"
  >
    <slot />
  </div>
</template>
