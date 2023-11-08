// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    options: {
      ripple: true
    },
    components: {
      include: ['Button']
    }
  },
  css: ['primevue/resources/themes/lara-light-teal/theme.css']
})
