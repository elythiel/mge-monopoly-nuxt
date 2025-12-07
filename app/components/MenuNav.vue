<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRoute } from 'nuxt/app'
import { onMounted, ref, useTemplateRef } from 'vue'

const navLinkElements = useTemplateRef('navLinkElements')
const underlineElement = useTemplateRef('underlineElement')

const isDark = ref(true)
const links = [
  { href: '/#header', text: 'Accueil' },
  { href: '/#monopoly', text: 'Mon parcours' },
  { href: '/#contact', text: 'Contact' },
  {
    href: 'https://www.linkedin.com/in/morgane-gervasoni-69b3bb4b',
    text: 'LinkedIn',
    target: '_blank',
  },
]

const route = useRoute()

onMounted(() => {
  ScrollTrigger.create({
    trigger: '#header',
    onUpdate: (scrollTrigger) =>
      (isDark.value = route.path !== '/' || scrollTrigger.isActive),
  })
  gsap.from(navLinkElements.value as HTMLElement[], {
    scale: 0.2,
    x: 100,
    opacity: 0,
    stagger: 0.1,
  })
})

function hideUnderline({ target }: MouseEvent) {
  if (!(target instanceof HTMLElement)) {
    return
  }

  gsap.to(underlineElement.value as HTMLElement, {
    duration: 0.25,
    opacity: 0,
    left: target.nextElementSibling ? target.offsetLeft - 200 : '100vw',
  })
}

function showUnderline({ target }: MouseEvent) {
  if (!(target instanceof HTMLElement)) {
    return
  }

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
    class="bg-darkblue fixed top-0 z-30 flex w-full flex-row items-center justify-end px-2 text-sm uppercase transition-all lg:px-12 lg:text-xl 2xl:px-16 2xl:text-2xl"
    :class="{
      'bg-white pt-0 text-mge-darkblue shadow-md': !isDark,
      'bg-mge-darkblue text-white md:pt-2 2xl:pt-9': isDark,
    }"
  >
    <div
      ref="underlineElement"
      class="nav-underline absolute h-0.5 self-end opacity-0"
      :class="{ 'bg-white': isDark, 'bg-mge-darkblue': !isDark }"
    />
    <a
      v-for="link in links"
      :key="link.href"
      ref="navLinkElements"
      :href="link.href"
      :target="link.target"
      class="mx-0 origin-right p-1 md:px-2 md:py-4 lg:mx-4 2xl:mx-6 2xl:px-3 2xl:py-6"
      @mouseenter="showUnderline"
      @mouseleave="hideUnderline"
    >
      {{ link.text }}
    </a>
  </nav>
</template>
