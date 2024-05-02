<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'

const element = ref<HTMLDivElement>()
const scrollbar = ref<PerfectScrollbar>()
const { isMobile } = useDevice()

onMounted(loadScrollBar)

async function loadScrollBar() {
  if (!isMobile && !scrollbar.value) {
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
    :class="{ 'overflow-y-auto': isMobile }"
  >
    <slot />
  </div>
</template>
