<template>
  <nav
    class="transition-all bg-darkblue fixed top-0 z-30 w-full flex flex-row justify-end items-center uppercase px-2 lg:px-12 text-sm lg:text-xl 2xl:px-16 2xl:text-2xl"
    :class="{'shadow-md bg-white pt-0 text-mge-darkblue': !isDark, 'md:pt-2 2xl:pt-9 bg-mge-darkblue text-white': isDark}"
  >
    <div
      ref="underline"
      class="nav-underline h-0.5 absolute opacity-0 self-end"
      :class="{'bg-white': isDark, 'bg-mge-darkblue': !isDark}"
    />
    <a
      v-for="link in links"
      ref="navLinks"
      :key="link.href"
      :href="link.href"
      :target="link.target"
      class="mx-0 lg:mx-4 p-1 md:py-4 md:px-2 2xl:py-6 2xl:px-3 2xl:mx-6"
      @mouseenter="showUnderline"
      @mouseleave="hideUnderline"
    >
      {{ link.text }}
    </a>
  </nav>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const isDark = ref(true);
const links = ref([
  { href: '/#header', text: 'Accueil' },
  { href: '/#monopoly', text: 'Mon parcours' },
  { href: '/#contact', text: 'Contact' },
  { href: 'https://www.linkedin.com/in/morgane-gervasoni-69b3bb4b', text: 'LinkedIn', target: '_blank' }
]);

const navLinks = ref();
const underline = ref();

ScrollTrigger.create({
  trigger: '#header',
  onUpdate: (scrollTrigger) => {
    isDark.value = useRoute().path !== '/' || scrollTrigger.isActive;
  }
});

onMounted(() => gsap.from(navLinks.value, { scale: 0.2, x: 100, opacity: 0, stagger: 0.1 }));

const hideUnderline = (event: any) => {
  gsap.to(underline.value, {
    duration: 0.25,
    opacity: 0,
    left: event.target.nextElementSibling ? event.target.offsetLeft - 200 : '100vw'
  });
};

const showUnderline = (event: any) => {
  gsap.to(underline.value, {
    duration: 0.25,
    opacity: 1,
    left: event.target.offsetLeft,
    width: event.target.offsetWidth
  });
};
</script>
