import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: ['nuxt-electron'],
  electron: {
    build: [
      {
        entry: 'electron/main.ts',
      },
    ],
  }
})