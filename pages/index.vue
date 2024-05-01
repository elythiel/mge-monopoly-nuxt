<template>
  <div>
    <IndexHeader id="header" />
    <BoardContainer id="monopoly" />
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
    <ContactForm id="contact" />
  </div>
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import BoardContainer from '../components/BoardContainer'
import ContactForm from '../components/ContactForm'

export default {
  components: { ContactForm, BoardContainer, IndexHeader },
}
</script>
