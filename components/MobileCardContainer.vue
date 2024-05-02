<script lang="ts" setup>
import type { Ref } from 'vue'
import { useAsyncData } from 'nuxt/app'
import type { CardContent } from '~/types/types'
import SimpleCard from '~/components/Cards/SimpleCard.vue'

const { data }: { data: Ref<CardContent[]> } = await useAsyncData(
  'cards-list',
  () => queryContent('card').where({ card: { $eq: true } }).sort({ _file: -1, $numeric: true }).find(),
)
</script>

<template>
  <div class="bg-white">
    <h2 class="font-avante-titul-inline text-center text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">
      Mon parcours
    </h2>
    <div class="flex overflow-x-auto w-full h-[80vh] py-8 gap-[5vw] snap-mandatory snap-x">
      <template
        v-for="(datum, index) in data"
        :key="index"
      >
        <SimpleCard
          :content="datum"
          :closable="false"
          class="grow shrink-0 basis-[80vw] h-full shadow-card first:ml-[10vw] last:mr-[10vw] snap-center"
        />
      </template>
    </div>
  </div>
</template>
