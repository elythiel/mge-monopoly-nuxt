<script lang="ts" setup>
const props = defineProps<{
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
}>()

const modelValue = defineModel<string>()
</script>

<template>
  <label class="mt-5 block">
    {{ label }}
    <textarea
      v-if="props.type === 'textarea'"
      v-model="modelValue"
      :name="props.name"
      class="mt-1 w-full border-2 border-gray-300 p-3 2xl:mt-2"
      rows="8"
      required
    />
    <input
      v-else
      v-model="modelValue"
      :type="props.type"
      :name="props.name"
      class="mt-1 w-full border-2 border-gray-300 p-3 2xl:mt-2"
      required
    />
  </label>
</template>
