<template>
  <div
    ref="main"
    class="text-white w-4/5 mx-auto pt-24 lg:w-full lg:px-16 lg:pt-20 lg:pb-8 2xl:px-24 2xl:pt-36 origin-right"
  >
    <h1 class="font-avante-titul-inline mt-12 text-4xl lg:text-6xl mb-8 2xl:text-7xl 2xl:mb-12">
      Mentions Legales
    </h1>
    <ContentDoc path="legal-notice" class="prose lg:prose-xl prose-invert">
      <template #empty>
        <div class="prose lg:prose-xl">
          <NoticeLoader />
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import NoticeLoader from '~/components/notice/NoticeLoader.vue';

const main = ref();

onMounted(() => {
  gsap.fromTo(main.value, { opacity: 0, x: -200 }, { opacity: 1, x: 0, ease: 'none' });
});

// This will be reactive even you change title/description above
useHead({
  title: 'Mentions légales | Morgane Gervasoni | Product Owner freelance',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mentions légales relatives aux informations du site'
    }
  ]
});
</script>
