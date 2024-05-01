<template>
  <p class="mt-5 text-base font-light italic text-center">
    Expertises :
    <ContentSlot :use="$slots.default" unwrap="p" />
  </p>
</template>
