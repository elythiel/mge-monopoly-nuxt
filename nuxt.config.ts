export default {
  target: 'static',
  css: [
    '@/assets/css/styles.css'
  ],
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ]
};
