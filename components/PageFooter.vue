<script lang="ts" setup>
const currentYear = (new Date()).getFullYear();
</script>

<template>
  <div class="text-gray-400 mx-8 lg:mx-16 mb-4 text-base lg:text-lg 2xl:text-xl 2xl:ml-24 2xl:mb-6">
    © {{ currentYear }} - Dashdone
    <span class="mx-2">
      |
    </span>
    <NuxtLink
      to="/mentions-legales"
      class="hover:underline"
    >
      Mentions légales
    </NuxtLink>
  </div>
</template>
