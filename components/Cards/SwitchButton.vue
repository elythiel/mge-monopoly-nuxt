<script lang="ts" setup>
import VueFeather from 'vue-feather'

defineProps<{
  type: 'prev' | 'next'
}>()
</script>

<template>
  <button
    type="button"
    :title="`Afficher la carte ${type === 'prev' ? 'précédente' : 'suivante'}`"
  >
    <VueFeather
      :type="type === 'prev' ? 'chevron-left' : 'chevron-right'"
      size="3em"
    />
  </button>
</template>
