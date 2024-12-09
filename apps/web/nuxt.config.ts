import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import theme from "./theme.js";
const options = {
  theme: {
    ...theme
  }
}

export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },

  modules: ['vuetify-nuxt-module'],
  plugins: ['~/plugins/api-service-init'],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  vuetify: {
    vuetifyOptions: {
      ...options
    }
  },
  // css: ['~/assets/scss/main.scss'],
  compatibilityDate: '2024-11-28',
})