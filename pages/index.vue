<script lang="ts" setup>
import IndexHeader from '~/components/IndexHeader'
import ContactForm from '~/components/ContactForm'
import CardsBoard from '~/components/CardsBoards/CardsBoard.vue'
</script>

<template>
  <div>
    <IndexHeader id="header" />
    <CardsBoard id="monopoly" />
    <div
      id="curriculum-pdf"
      class="my-8 2xl:my-10"
    >
      <p class="text-center text-white text-base lg:text-2xl">
        Un CV plus standard ? C'est par
        <a
          target="_blank"
          href="/medias/CV-Gervasoni-Morgane.pdf"
          class="underline hover:no-underline"
        >ici</a> !
      </p>
    </div>
    <ContactForm
      id="contact"
      class="pt-20 pb-12 mb-4 lg:pt-24 lg:pb-28 lg:mb-12 2xl:pt-40 2xl:pb-28"
    />
  </div>
</template>
