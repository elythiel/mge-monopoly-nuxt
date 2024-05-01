<script lang="ts" setup>
import { onMounted, ref } from 'vue'

defineProps<{
  text: string
}>()

const state = ref(1)

onMounted(() => {
  setInterval(() => state.value = getNewState(), 2000)
})

function getNewState(): number {
  const newState = Math.floor(Math.random() * 4) + 1
  if (newState !== state.value) {
    return newState
  }
  return getNewState()
}
</script>

<template>
  <span class="scene relative">
    <span class="invisible">{{ text }}</span>
    <span
        class="prisme absolute h-full left-0 top-0"
        :class="`state-${state}`"
    >
      <span
          v-show="state !== 3"
          class="face-1 absolute leading-[initial] h-full text-mge-lightblue"
      >{{ text }}</span>
      <span
          v-show="state !== 4"
          class="face-2 absolute leading-[initial] h-full text-mge-yellow"
      >{{ text }}</span>
      <span
          v-show="state !== 1"
          class="face-3 absolute leading-[initial] h-full text-mge-green"
      >{{ text }}</span>
      <span
          v-show="state !== 2"
          class="face-4 absolute leading-[initial] h-full text-mge-red"
      >{{ text }}</span>
    </span>
  </span>
</template>

<style scoped>
.scene {
  perspective: 600px;
}

.prisme {
  transform-style: preserve-3d;
  transition: transform 500ms cubic-bezier(0.58, 0.43, 0.65, 1.44);
}

.face-2 {
  transform: rotateX(90deg);
}

.face-3 {
  transform: rotateX(180deg);
}

.face-4 {
  transform: rotateX(270deg);
}
.state-1 {
  transform: rotateX(-0deg);
}
.state-2 {
  transform: rotateX(-90deg);
}

.state-3 {
  transform: rotateX(-180deg);
}

.state-4 {
  transform: rotateX(-270deg);
}
</style>
