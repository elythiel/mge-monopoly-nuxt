<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { useRoute } from 'nuxt/app'

const navLinkElements = ref<HTMLElement[]>()
const underlineElement = ref<HTMLElement>()

const isDark = ref(true)
const links = [
  { href: '/#header', text: 'Accueil' },
  { href: '/#monopoly', text: 'Mon parcours' },
  { href: '/#contact', text: 'Contact' },
  { href: 'https://www.linkedin.com/in/morgane-gervasoni-69b3bb4b', text: 'LinkedIn', target: '_blank' },
]

const route = useRoute()

onMounted(() => {
  ScrollTrigger.create({
    trigger: '#header',
    onUpdate: scrollTrigger => isDark.value = route.path !== '/' || scrollTrigger.isActive,
  })
  gsap.from(navLinkElements.value as HTMLElement[], { scale: 0.2, x: 100, opacity: 0, stagger: 0.1 })
})
function hideUnderline({ target }: { target: HTMLElement }) {
  gsap.to(underlineElement.value as HTMLElement, {
    duration: 0.25,
    opacity: 0,
    left: target.nextElementSibling ? target.offsetLeft - 200 : '100vw',
  })
}

function showUnderline({ target }: { target: HTMLElement }) {
  gsap.to(underlineElement.value as HTMLElement, {
    duration: 0.25,
    opacity: 1,
    left: target.offsetLeft,
    width: target.offsetWidth,
  })
}
</script>

<template>
  <nav
    class="transition-all bg-darkblue fixed top-0 z-30 w-full flex flex-row justify-end items-center uppercase px-2 lg:px-12 text-sm lg:text-xl 2xl:px-16 2xl:text-2xl"
    :class="{ 'shadow-md bg-white pt-0 text-mge-darkblue': !isDark, 'md:pt-2 2xl:pt-9 bg-mge-darkblue text-white': isDark }"
  >
    <div
      ref="underlineElement"
      class="nav-underline h-0.5 absolute opacity-0 self-end"
      :class="{ 'bg-white': isDark, 'bg-mge-darkblue': !isDark }"
    />
    <a
      v-for="link in links"
      :key="link.href"
      ref="navLinkElements"
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
