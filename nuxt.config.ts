import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    target: 'static',
    css: [
        '@/assets/css/styles.css'
    ],
    buildModules: ['@nuxt/typescript-build'],
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/eslint'],
    eslint: {
        config: {
            stylistic: true
        }
    }
}

export default config
