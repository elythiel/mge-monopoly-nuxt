<template>
  <div class="board-case shadow-board transition-all leading-1.15 transition-transform flex flex-col z-10"
       v-bind:class="{'cursor-pointer hover:scale-110 hover:z-20': content.content}"
       @click="content.content ? $refs.cardComponent.open($event) : null"
  >
    <div v-if="content.color"
         :class="'shadow-board basis-3/12 bg-mge-' + content.color"
    ></div>
    <div class="flex-grow flex flex-col justify-between items-center p-2">
      <h4 class="uppercase text-center" v-html="content.title"></h4>
      <div v-if="content.period"
           class="text-center">
        {{ content.period }}
      </div>
      <img v-if="content.image"
           :src="'/images/' + content.image.name"
           class="w-auto h-auto m-auto"
           :class="getImageSize(content.image)"
           :alt="content.image.alt"
      />
    </div>
    <Teleport to="body">
      <BoardCard ref="cardComponent" v-if="content.content" :card="content" />
    </Teleport>
  </div>
</template>

<script setup>
defineProps({
  content: Object
});

const getImageSize = (image) => {
  switch (image) {
    case 'xl':
      return 'max-w-[5vw] max-h-[5vw]';
    case 'lg':
      return 'max-w-[6vw] max-h-[6vw]';
    default:
      return 'max-w-[4vw] max-h-[6vw]';
  }
}
</script>
