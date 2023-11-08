// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ["Button"],
    },
  },
  css: [
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-dark-indigo/theme.css",
  ],
});
