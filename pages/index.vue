<template>
  <div>
    <Header />
    <Board />
    <portal-target name="cards" multiple />
    <div id="curriculum-pdf" class="my-8 2xl:my-10">
      <p class="text-center text-white text-base lg:text-2xl">
        Un CV plus standard ? C'est par <a target="_blank" href="../medias/202104_CV-Gervasoni-Morgane.pdf" class="underline hover:no-underline">ici</a> !
      </p>
    </div>
    <Contact />
  </div>
</template>

<script>
import Header from "../components/Header";
import Board from "../components/Board";
import Contact from "../components/Contact";
import {PortalTarget} from "portal-vue";

export default {
  components: {Board, Contact, Header, PortalTarget}
}
</script>
