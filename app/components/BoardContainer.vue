<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue'

const { data, nextCardId, prevCardId } = await useCards()

const cardElements = useTemplateRef('cards')
const rotation = ref(0)

function findCard(id: string) {
  const index = data.value
    ?.filter((item) => !!item.card)
    .findIndex((item) => item.id === id)

  if (index !== undefined && cardElements.value && cardElements.value[index]) {
    return cardElements.value[index] ?? null
  }

  return null
}

function findNextCard(index: number) {
  const nextId = nextCardId(index)

  return nextId ? findCard(nextId) : null
}

function findPrevCard(index: number) {
  const prevId = prevCardId(index)

  return prevId ? findCard(prevId) : null
}
</script>

<template>
  <div
    class="relative mb-4 overflow-hidden bg-white pb-24 pt-20 lg:mb-12 lg:pt-24 2xl:pt-40"
  >
    <div
      class="mx-auto mb-8 flex w-[90vw] items-center justify-between 2xl:mb-12"
    >
      <BoardContainerArrow v-model="rotation" direction="left" />
      <h2
        class="text-center font-avante-titul-inline text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl"
      >
        Mon parcours
      </h2>
      <BoardContainerArrow v-model="rotation" direction="right" />
    </div>
    <template v-if="data">
      <BoardContainerDesktop
        :rotation="rotation"
        :data="data"
        @click:case="($event, id) => findCard(id)?.open($event)"
      />
      <template v-for="(item, index) in data">
        <BoardCard
          v-if="item.card"
          ref="cards"
          :key="item.id"
          :data="item"
          @click:prev="findPrevCard(index)?.open($event, 'left')"
          @click:next="findNextCard(index)?.open($event, 'right')"
        />
      </template>
    </template>
  </div>
</template>
