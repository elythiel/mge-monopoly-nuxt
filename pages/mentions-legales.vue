<template>
  <div ref="main"
       class="text-white w-4/5 mx-auto pt-24 lg:w-full lg:px-16 lg:pt-20 lg:pb-8 2xl:px-24 2xl:pt-36 origin-right">
    <h1 class="font-avante-titul-inline mt-12 text-4xl lg:text-6xl mb-8 2xl:text-7xl 2xl:mb-12">Mentions Legales</h1>
    <ContentDoc path="legal-notice" class="prose lg:prose-xl prose-invert">
      <template #empty>
        <div class="prose lg:prose-xl">
          <content-loader
              viewBox="0 0 400 495"
              :speed="2"
              primaryColor="#d9d9d9"
              secondaryColor="#ededed"
          >
            <rect x="0" y="0" rx="2" ry="2" width="400" height="30"/>
            <rect x="0" y="50" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="65" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="80" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="95" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="110" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="135" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="150" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="180" rx="2" ry="2" width="400" height="30"/>
            <rect x="0" y="225" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="240" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="265" rx="2" ry="2" width="400" height="30"/>
            <rect x="0" y="315" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="330" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="345" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="365" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="380" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="395" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="410" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="425" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="450" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="470" rx="2" ry="2" width="400" height="10"/>
            <rect x="0" y="485" rx="2" ry="2" width="400" height="10"/>
          </content-loader>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {gsap} from 'gsap';
import {onMounted} from 'vue';
import {ContentLoader} from "vue-content-loader";

const main = ref();

onMounted(() => {
  gsap.fromTo(main.value, {opacity: 0, x: -200}, {opacity: 1, x: 0, ease: 'none'});
});
</script>
