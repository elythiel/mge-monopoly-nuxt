<script lang="ts" setup>
import { computed } from 'vue'
import type { CardContent } from '~/types/types'
import SimpleCard from '~/components/Cards/SimpleCard.vue'

const props = defineProps<{
  data: CardContent[]
}>()
const reversed = computed(() => props.data ? [...props.data].reverse() : [])
</script>

<template>
  <div class="bg-white">
    <h2 class="font-avante-titul-inline text-center text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">
      Mon parcours
    </h2>
    <div class="flex overflow-x-auto w-full h-[80vh] py-8 gap-[5vw] snap-mandatory snap-x">
      <template
        v-for="datum in reversed"
        :key="datum.title"
      >
        <SimpleCard
          v-if="datum.card"
          :content="datum"
          :closable="false"
          class="grow shrink-0 basis-[80vw] h-full shadow-card first:ml-[10vw] last:mr-[10vw] snap-center"
        />
      </template>
    </div>
  </div>
</template>
