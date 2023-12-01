// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules:{"/:id":{ssr:false}},
  modules:['@nuxtjs/tailwindcss'],
  devtools: { enabled: true }
})
