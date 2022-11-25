<template>
  <div>
    <AppNav />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppNav from '~/components/AppNav.vue';

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  title: 'Morgane Gervasoni | Product Owner freelance',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Chef de Projet fonctionnel et créatrice de jeux de société à mes heures perdues, découvrez mon parcours sous un format inspiré d\'un jeu de plateau très connu ;)'
    },
    { hid: 'og-title', property: 'og:title', content: 'Morgane Gervasoni | Product Owner freelance' },
    { hid: 'og-url', property: 'og:url', content: 'https://www.morganegervasoni.fr/' },
    { hid: 'og-image', property: 'og:image', content: '/images/screenshot-home.png' },
    {
      hid: 'og-desc',
      property: 'og-description',
      content: "Chef de Projet fonctionnel et créatrice de jeux de société à mes heures perdues, découvrez mon parcours sous un format inspiré d'un jeu de plateau très connu ;)"
    },
    { hid: 'og-site-name', property: 'og:site_name', content: 'Morgane Gervasoni | Product Owner freelance' },
    { hid: 'og-type', property: 'og:type', content: 'website' }
  ]
});
</script>
