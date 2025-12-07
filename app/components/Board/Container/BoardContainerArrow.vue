<script lang="ts" setup>
import { RotateCcw, RotateCw } from 'lucide-vue-next'

defineProps<{
  direction: 'left' | 'right'
}>()

const modelValue = defineModel<number>({ required: true })
</script>
<template>
  <button
    type="button"
    class="hidden md:flex items-center justify-center p-2 md:text-2xl"
    :title="`Tourner le plateau en sens ${direction === 'left' ? 'anti-horaire' : 'horaire'}`"
    @click="modelValue += direction === 'left' ? -1 : 1"
  >
    <Component
      :is="direction === 'left' ? RotateCcw : RotateCw"
      class="size-12 stroke-1"
    />
  </button>
</template>
