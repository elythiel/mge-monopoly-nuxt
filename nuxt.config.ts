const config = {
  target: 'static',
  css: [
    '@/assets/css/styles.css',
  ],
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/device'
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  device: {
    refreshOnResize: true
  }
}

export default config
