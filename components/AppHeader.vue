<template>
  <div class="relative flex flex-col min-h-screen w-full pt-20 lg:pt-0 overflow-x-hidden">
    <div class="mt-auto flex flex-col lg:flex-row justify-center items-center mb-0 lg:mb-12 2xl:mb-16">
      <div class="text-center w-full my-4 lg:w-1/2 lg:text-right lg:mb-8 2xl:mt-6 2xl:mb-12">
        <h1 class="font-avante-titul-inline text-white pb-2 lg:pb-4 text-4xl lg:text-6xl 2xl:pb-6 2xl:text-8xl">
          <span ref="firstName" class="block opacity-0">Morgane</span>
          <span ref="lastName" class="block opacity-0">Gervasoni</span>
        </h1>
        <h2 ref="job" class="text-gray-600 uppercase opacity-0 text-2xl lg:text-3xl 2xl:text-5xl">
          Product Owner
        </h2>
      </div>
      <div
        ref="separator"
        class="w-1/2 h-1 lg:h-auto lg:w-1 lg:self-stretch bg-white origin-top mx-24 2xl:mx-32"
      />
      <div
        ref="description"
        class="text-center lg:text-left w-1/2 text-white opacity-0 mt-4 mb-8 text-base lg:text-2xl leading-normal 2xl:mt-6 2xl:mb-12 2xl:text-3xl 2xl:leading-relaxed"
      >
        <p class="mb-2 lg:mb-8 2xl:mb-12">
          Envie de me connaître ?
        </p>
        <p class="lg:pr-48 2xl:pr-80">
          C'est simple, il suffit de jouer sur mon plateau ! Les cartes
          <ColorPrism text="missions" />
          sont cliquables pour avoir plus de détails ;)
        </p>
      </div>
    </div>

    <a
      ref="discover"
      href="/#monopoly"
      class="discover mb-auto lg:mb-0 mx-auto text-center leading-tight opacity-0 text-base lg:text-xl 2xl:text-2xl"
    >
      <div
        class="rounded-full flex items-center justify-center border-3 border-white p-1 h-36 w-36 lg:h-36 lg:w-36 2xl:h-44 2xl:w-44 transition-shadow duration-500"
      >
        <div class="rounded-full bg-white h-full w-full flex items-center justify-center">
          <span class="mb-1">
            Découvrir <br> mon parcours
          </span>
        </div>
      </div>
    </a>

    <AppFooter />
  </div>
</template>
<script lang="ts" setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';
import ColorPrism from '~/components/ColorPrism.vue';
import AppFooter from '~/components/AppFooter.vue';

const firstName = ref();
const lastName = ref();
const job = ref();
const description = ref();
const separator = ref();
const discover = ref();

onMounted(() => animate());

const animate = () => {
  const tl = gsap.timeline();
  // name animations
  tl.fromTo(firstName.value, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' });
  tl.fromTo(
    lastName.value,
    { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.20 },
    '<'
  );
  // job animation
  tl.fromTo(job.value, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.in' }, '<');
  // text animation
  tl.fromTo(description.value, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, '<');
  // separator animation
  tl.fromTo(separator.value, { scaleY: 0, opacity: 0 }, {
    scaleY: 1,
    opacity: 1,
    duration: 0.75,
    ease: 'power1.out'
  }, '<');
  // circle button animation
  tl.fromTo(discover.value, { opacity: 0 }, { opacity: 1 });
  tl.fromTo(discover.value, { scale: 0.3 }, { scale: 1, ease: 'bounce' }, '<');
};
</script>

<style scoped>
.discover:hover > div {
  box-shadow: 0 0 5rem 0.5rem #545a73;
}
</style>
