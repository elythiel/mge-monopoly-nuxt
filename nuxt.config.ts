import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // target: 'static',
    head: {
        title: 'Morgane Gervasoni - Product Owner',
        htmlAttrs: {
            lang: 'fr'
        },
        link: [
            {rel: 'icon', type: 'image/svg', href: '/favicon.svg'},
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/css/styles.css"
    ],
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ]
})
