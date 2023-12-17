// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'NUXT PROJECT',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  tailwindcss: {
    cssPath: '~/assets/stylesheet/index.scss',
  },
  runtimeConfig: {
    apiSecret: 'It is a secret',
    public: {
      apiBase: '/api'
    }
  }
})
