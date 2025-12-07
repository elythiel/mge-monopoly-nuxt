export default defineNuxtConfig({
  css: ['@/assets/css/styles.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nuxt-svgo',
  ],
  typescript: {
    typeCheck: true,
  },
})
