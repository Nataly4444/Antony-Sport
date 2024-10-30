// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: 'module'
    },
    workbox: {
      navigateFallback: "/",
    },
    manifest: {
      name: 'AntonySport',
      short_name: 'Antony',
      description: 'AntonySport pwa',
      lang: 'en',
      orientation: 'portrait',
      background_color: "#fff",
      theme_color: "black",
      icons: [
        {
          src: 'icons/Heart_48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: "icons/Heart_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/Heart_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/Heart_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/Heart_512x512.png",
          sizes: "513x512",
          type: "image/png",
        },
      ],
    },
  }
})