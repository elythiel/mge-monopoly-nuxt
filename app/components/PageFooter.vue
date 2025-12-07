<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="mx-8 mb-4 text-base text-gray-400 lg:mx-16 lg:text-lg 2xl:mb-6 2xl:ml-24 2xl:text-xl"
  >
    © {{ currentYear }} - Dashdone
    <span class="mx-2"> | </span>
    <NuxtLink to="/mentions-legales" class="hover:underline">
      Mentions légales
    </NuxtLink>
  </div>
</template>
