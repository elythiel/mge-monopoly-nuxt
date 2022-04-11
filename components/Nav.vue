<template>
  <nav id="main-nav"
       class="transition-all bg-darkblue fixed top-0 z-30 w-full flex flex-row justify-end items-center uppercase px-2 lg:px-12 text-base lg:text-xl 2xl:px-16 2xl:text-2xl"
       v-bind:class="{'shadow-md bg-white pt-0 text-mge-darkblue': !isDark, 'pt-6 2xl:pt-9 text-white': isDark}"
  >
    <div id="main-nav-underline"
         class="nav-underline h-0.5 absolute opacity-0 self-end"
         v-bind:class="{'bg-white': isDark, 'bg-mge-darkblue': !isDark}"
    ></div>
    <NuxtLink to="/#header"
       class="opacity-0 mx-0 lg:mx-4 py-4 px-2 2xl:py-6 2xl:px-3 2xl:mx-6"
       v-show="!isDark || $nuxt.$route.path !== '/'"
    >
      Accueil
    </NuxtLink>
    <NuxtLink to="/#monopoly"
       class="opacity-0 mx-0 lg:mx-4 py-4 px-2 2xl:py-6 2xl:px-3 2xl:mx-6">
      Mon parcours
    </NuxtLink>
    <NuxtLink to="/#contact"
       class="opacity-0 mx-0 lg:mx-4 py-4 px-2 2xl:py-6 2xl:px-3 2xl:mx-6">
      Contact
    </NuxtLink>
    <a href="https://www.linkedin.com/in/morgane-gervasoni-69b3bb4b"
       target="_blank"
       class="opacity-0 mx-0 lg:mx-4 py-4 px-2 2xl:py-6 2xl:px-3 2xl:mx-6">
      LinkedIn
    </a>
  </nav>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      isDark: true
    }
  },
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      // main nav animation
      let navLinks = document.getElementById('main-nav').querySelectorAll('a');
      gsap.fromTo(navLinks, {
        scale: 0.2,
        x: 100,
        opacity: 0
      }, {
        scale: 1,
        x: 0,
        opacity: 1,
        stagger: 0.1
      });
      [...navLinks].forEach((navLink) => {
        navLink.addEventListener('mouseenter', this.moveNavUnderline);
        navLink.addEventListener('mouseleave', this.moveNavUnderline);
      });
      ScrollTrigger.create({
        trigger: '#header',
        onUpdate: scrollTrigger => this.isDark = scrollTrigger.isActive
      });
    },
    moveNavUnderline(event) {
      const bar = event.target.parentNode.querySelector('.nav-underline');
      let properties = {duration: 0.25};
      if (event.type === 'mouseleave') {
        properties.opacity = 0;
        properties.left = event.target.nextElementSibling ? event.target.offsetLeft - 200 : '100vw';
      } else {
        properties.opacity = 1;
        properties.left = event.target.offsetLeft;
        properties.width = event.target.offsetWidth;
      }

      gsap.to(bar, properties);
    }
  }
}
</script>
