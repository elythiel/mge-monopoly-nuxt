<script lang="ts" setup>
import { gsap } from 'gsap'
import { onMounted, useTemplateRef } from 'vue'

const firstNameElement = useTemplateRef('firstName')
const lastNameElement = useTemplateRef('lastName')
const jobElement = useTemplateRef('job')
const descriptionElement = useTemplateRef('description')
const separatorElement = useTemplateRef('separator')
const discoverElement = useTemplateRef('discover')

onMounted(() => {
  animate()
})

function animate() {
  const tl = gsap.timeline()
  // name animations
  tl.fromTo(
    firstNameElement.value as HTMLElement,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
  )
  tl.fromTo(
    lastNameElement.value as HTMLElement,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 },
    '<',
  )
  // job animation
  tl.fromTo(
    jobElement.value as HTMLElement,
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: 'power2.in' },
    '<',
  )
  // text animation
  tl.fromTo(
    descriptionElement.value as HTMLElement,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
    '<',
  )
  // separator animation
  tl.fromTo(
    separatorElement.value as HTMLElement,
    { scaleY: 0, opacity: 0 },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.75,
      ease: 'power1.out',
    },
    '<',
  )
  // circle button animation
  tl.fromTo(
    discoverElement.value as HTMLElement,
    { opacity: 0 },
    { opacity: 1 },
  )
  tl.fromTo(
    discoverElement.value as HTMLElement,
    { scale: 0.3 },
    { scale: 1, ease: 'bounce' },
    '<',
  )
}
</script>

<template>
  <div
    class="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-20 lg:pt-0"
  >
    <div
      class="mb-0 mt-auto flex flex-col items-center justify-center lg:mb-12 lg:flex-row 2xl:mb-16"
    >
      <div
        class="my-4 w-full text-center lg:mb-8 lg:w-1/2 lg:text-right 2xl:mb-12 2xl:mt-6"
      >
        <h1
          class="pb-2 font-avante-titul-inline text-4xl text-white lg:pb-4 lg:text-6xl 2xl:pb-6 2xl:text-8xl"
        >
          <span ref="firstName" class="block opacity-0">Morgane</span>
          <span ref="lastName" class="block opacity-0">Gervasoni</span>
        </h1>
        <h2
          ref="job"
          class="text-2xl uppercase text-gray-600 opacity-0 lg:text-3xl 2xl:text-5xl"
        >
          Product Owner
        </h2>
      </div>
      <div
        ref="separator"
        class="mx-24 h-1 w-1/2 origin-top bg-white opacity-0 lg:h-auto lg:w-1 lg:self-stretch 2xl:mx-32"
      />
      <div
        ref="description"
        class="mb-8 mt-4 w-1/2 text-center text-base leading-normal text-white opacity-0 lg:text-left lg:text-2xl 2xl:mb-12 2xl:mt-6 2xl:text-3xl 2xl:leading-relaxed"
      >
        <p class="mb-2 lg:mb-8 2xl:mb-12">Envie de me connaître ?</p>
        <p class="lg:pr-48 2xl:pr-80">
          C'est simple, il suffit de jouer sur mon plateau ! Les cartes
          <IndexHeaderColorPrisme text="missions" />
          sont cliquables pour avoir plus de détails ;)
        </p>
      </div>
    </div>

    <a
      ref="discover"
      href="/#monopoly"
      class="discover mx-auto mb-auto text-center text-base leading-tight opacity-0 lg:mb-0 lg:text-xl 2xl:text-2xl"
    >
      <div
        class="flex h-36 w-36 items-center justify-center rounded-full border-3 border-white p-1 transition-shadow duration-500 lg:h-36 lg:w-36 2xl:h-44 2xl:w-44"
      >
        <div
          class="flex h-full w-full items-center justify-center rounded-full bg-white"
        >
          <span class="mb-1">
            Découvrir <br />
            mon parcours
          </span>
        </div>
      </div>
    </a>

    <PageFooter />
  </div>
</template>

<style scoped>
.discover:hover > div {
  box-shadow: 0 0 5rem 0.5rem #545a73;
}
</style>
