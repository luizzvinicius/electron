/* eslint-disable import/no-duplicates */
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
