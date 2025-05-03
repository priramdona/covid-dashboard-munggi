// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  components: true,
  css: [
    '~/assets/css/tailwind.css',
    'leaflet/dist/leaflet.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
        // '@nuxt/vite'
    // '@nuxt/eslint',
    // '@nuxt/content',
    // '@nuxt/fonts',
    // '@nuxt/icon',
    // '@nuxt/image',
    // '@nuxt/scripts',
    // '@nuxt/test-utils',
    // '@nuxt/ui'
    
    // '@nuxtjs/tailwindcss',
  ]
})