import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SupaNuxt Template",
  description: "Nuxt3 + Supabase + NuxtUI + Cloudflare Pages",
  base: "/SupaNuxt-Template/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Demo",
        link: "https://supanuxt-template.stax124.com/",
        target: "_blank",
      },
    ],

    sidebar: [
      {
        text: "Basics",
        items: [
          {
            text: "Introduction",
            link: "/pages/introduction",
          },
        ],
        collapsed: false,
      },
    ],

    search: {
      provider: "local",
      options: {
        disableQueryPersistence: true,
      },
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Stax124/SupaNuxt-Template" },
    ],
  },
});
