<template>
  <div>
    <AppHeader id="header" />
    <AppBoard id="monopoly" />
    <div id="curriculum-pdf" class="my-8 2xl:my-10">
      <p class="text-center text-white text-base lg:text-2xl">
        Un CV plus standard ? C'est par
        <a
          target="_blank"
          href="/medias/CV-Gervasoni-Morgane.pdf"
          class="underline hover:no-underline"
        >ici</a> !
      </p>
    </div>
    <AppContact id="contact" />
  </div>
</template>
<script lang="ts" setup>
import AppBoard from '~/components/AppBoard.vue';
import AppContact from '~/components/AppContact.vue';
import AppHeader from '~/components/AppHeader.vue';
</script>
