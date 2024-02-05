export default defineNuxtConfig({
  pages: true,
  ssr: false,
  devtools: { enabled: true },
  electron: {
    build: [
      {
        entry: "electron/main.ts",
      },
    ],
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["nuxt-electron"],
});
