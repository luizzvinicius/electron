export default defineNuxtConfig({
  pages: true,
  ssr: false,
  devtools: { enabled: true },
  electron: {
    build: [
      {
        entry: "electron/preload.ts",
        onstart(args) {
          args.reload()
        }
      },
      {
        entry: "electron/main.ts",
      }
    ],
    renderer: {}
  },
  router: {
    options: {
      hashMode: true,
    },
  },
  app: {
    baseURL: "./",
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