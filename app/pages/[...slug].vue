<script lang="ts" setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

const main = useTemplateRef('main')

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first()
})

onMounted(() => {
  gsap.fromTo(
    main.value,
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, ease: 'none' },
  )
})

// This will be reactive even you change title/description above
useHead({
  title: 'Mentions légales | Morgane Gervasoni | Product Owner freelance',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mentions légales relatives aux informations du site',
    },
  ],
})
</script>

<template>
  <div
    ref="main"
    class="mx-auto w-4/5 origin-right pt-24 text-white lg:w-full lg:px-16 lg:pb-8 lg:pt-20 2xl:px-24 2xl:pt-36"
  >
    <template v-if="page">
      <h1
        class="mb-8 mt-12 font-avante-titul-inline text-4xl lg:text-6xl 2xl:mb-12 2xl:text-7xl"
      >
        {{ page.title }}
      </h1>
      <div class="prose prose-invert my-12 lg:prose-xl">
        <ContentRenderer :value="page" />
      </div>
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </div>
</template>
