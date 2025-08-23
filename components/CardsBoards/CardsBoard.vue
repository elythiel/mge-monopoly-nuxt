<script lang="ts" setup>
import type { Ref } from 'vue'
import { useAsyncData } from 'nuxt/app'
import type { CardContent } from '~/types/types'
import { useBreakpoints } from '~/composables/breakpoints'
import CardsBoardDesktop from '~/components/CardsBoards/CardsBoardDesktop.vue'
import CardsBoardMobile from '~/components/CardsBoards/CardsBoardMobile.vue'

const { data }: { data: Ref<CardContent[]> } = await useAsyncData(
  'cards-list',
  () => queryContent('card').find(),
)

const { isSm } = useBreakpoints()
</script>

<template>
  <div>
    <Component
      :is="isSm ? CardsBoardMobile : CardsBoardDesktop"
      :data="data"
      class="pt-20 pb-12 mb-4 lg:pt-24 lg:pb-28 lg:mb-12 2xl:pt-40 2xl:pb-28"
    />
  </div>
</template>
