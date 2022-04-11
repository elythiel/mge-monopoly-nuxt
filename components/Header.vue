<template>
  <div id="header" class="relative flex flex-col min-h-screen w-full pt-20 lg:pt-0 overflow-x-hidden">
    <div class="mt-auto flex flex-col lg:flex-row justify-center items-center mb-0 lg:mb-12 2xl:mb-16">
      <div class="text-center w-full my-4 lg:w-1/2 lg:text-right lg:mb-8 2xl:mt-6 2xl:mb-12">
        <h1 class="font-avante-titul-inline text-white pb-2 lg:pb-4 text-4xl lg:text-6xl 2xl:pb-6 2xl:text-8xl">
          <span id="first-name" class="block opacity-0">Morgane</span>
          <span id="last-name" class="block opacity-0">Gervasoni</span>
        </h1>
        <h2 id="job" class="text-gray-600 uppercase opacity-0 text-2xl lg:text-3xl 2xl:text-5xl">
          Product Owner
        </h2>
      </div>
      <div id="title-separator"
           class="w-1/2 h-1 lg:h-auto lg:w-1 lg:self-stretch bg-white origin-bottom mx-24 2xl:mx-32"></div>
      <div id="description"
           class="text-center lg:text-left w-1/2 text-white opacity-0 mt-4 mb-8 text-base lg:text-2xl leading-normal 2xl:mt-6 2xl:mb-12 2xl:text-3xl 2xl:leading-relaxed">
        <p class="mb-2 lg:mb-8 2xl:mb-12">
          Envie de me connaître ?
        </p>
        <p class="lg:pr-48 2xl:pr-80">
          C'est simple, il suffit de jouer sur mon plateau ! Les cartes
          <span class="colors-switcher-scene">
            <span class="colors-switcher-mask">missions</span>
            <span class="colors-switcher-prisme state-1">
                <span class="colors-switcher-face face-1 text-mge-lightblue">missions</span>
                <span class="colors-switcher-face face-2 text-mge-yellow">missions</span>
                <span class="colors-switcher-face face-3 text-mge-green">missions</span>
                <span class="colors-switcher-face face-4 text-mge-red">missions</span>
            </span>
          </span>
          sont cliquables pour avoir plus de détails ;)
        </p>
      </div>
    </div>

    <a href="/#monopoly" id="play-btn"
       class="mb-auto lg:mb-0 mx-auto text-center leading-tight opacity-0 text-base lg:text-xl 2xl:text-2xl">
      <div class="rounded-full flex items-center justify-center border-3 border-white p-1 h-36 w-36 lg:h-36 lg:w-36 2xl:h-44 2xl:w-44 transition-shadow duration-500">
        <div class="rounded-full bg-white h-full w-full flex items-center justify-center">
                <span class="mb-1">
                    Découvrir
                    <br>
                    mon parcours
                </span>
        </div>
      </div>
    </a>

    <Footer/>
  </div>
</template>
<script>
import Footer from "./Footer";
import {gsap} from 'gsap';

export default {
  components: {Footer},
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      // name animations
      gsap.fromTo('#first-name', {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1, ease: 'power2.out'});
      gsap.fromTo('#last-name', {x: -100, opacity: 0}, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.20,
        ease: 'power2.out'
      });
      // job animation
      gsap.fromTo('#job', {opacity: 0}, {opacity: 1, duration: 1, ease: 'power2.in'});
      // text animation
      gsap.fromTo('#description', {x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 1, ease: 'power2.out'});
      // separator animation
      gsap.fromTo('#title-separator', {scaleY: 0, opacity: 0}, {
        scaleY: 1,
        opacity: 1,
        duration: 0.75,
        ease: 'power1.in'
      });
      // circle button animation
      gsap.fromTo('#play-btn', {opacity: 0}, {opacity: 1, delay: 1});
      gsap.fromTo('#play-btn', {scale: 0.3}, {scale: 1, delay: 1, ease: 'bounce'});
      // color switchers
      const colorSwitchers = [...document.getElementsByClassName('colors-switcher-prisme')];
      setInterval(() => {
        colorSwitchers.forEach((element) => {
          let rand = (Math.floor(Math.random() * 4)) + 1;
          for(let i = 1; i <= 4; i++) {
            element.classList.remove('state-' + i);
          }
          element.classList.add('state-' + rand);
        });
      }, 2000);
    }
  }
}
</script>
