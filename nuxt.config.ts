// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: false,
      type: 'module'
    },
    manifest: {
      name: 'app test',
      short_name: 'app test',
      description: 'app yang dibuat untuk pwa',
      lang: 'en',
      orientation: 'portrait',
      icons: [
        {
          src: 'Heart.png',
          sizes: '48x48',
          type: 'image/png',
        },
        // ... other icon sizes ...
      ],
    },
  }
})