import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SupaNuxt Template",
  description: "Nuxt3 + Supabase + NuxtUI + Cloudflare Pages",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Demo",
        link: "https://supanuxt.stax124.com/",
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
          {
            text: "Installation",
            link: "/pages/installation",
          },
        ],
        collapsed: false,
      },
      {
        text: "Frontend",
        items: [
          {
            text: "Introduction",
            link: "/pages/frontend/frontend",
          },
        ],
        collapsed: false,
      },
      {
        text: "Backend",
        items: [
          {
            text: "Introduction",
            link: "/pages/backend/backend",
          },
        ],
        collapsed: false,
      },
      {
        text: "Supabase",
        items: [
          {
            text: "Introduction",
            link: "/pages/supabase/supabase",
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
