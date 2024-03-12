export default defineNuxtConfig({
  pages: true,
  ssr: false,
  devtools: { enabled: true },
  electron: {
    build: [
      {
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart(args) {
          args.reload()
        }
      }
    ],
    renderer: {}
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["nuxt-electron"],
  routeRules: {
    'http://localhost:54911': {cors: true, headers: {"Access-control-allow-origin": "*"}},
  }
});