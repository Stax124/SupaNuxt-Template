// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "nitro-cloudflare-dev",
    "@vueuse/nuxt",
    "@nuxtjs/device",
  ],
  devServer: {
    port: 5173,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  supabase: {
    redirect: false,
  },
  nitro: {
    preset: "cloudflare-pages",
  },
});
