<template>
  <UContainer class="mt-12 mb-32 max-w-4xl">
    <PageHero
      title="Nuxt 3 + Supabase Starter"
      description="Nuxt 3 · Supabase · Cloudflare Pages · Tailwind"
    />
    <div class="grid grid-cols-2 gap-2">
      <PrettyCard icon="carbon:user" title="Color Palette">
        Choose a primary and a gray color from your Tailwind CSS color palette.
      </PrettyCard>
      <PrettyCard title="SSR Out of the box" icon="carbon:code-block">
        Fully compatible with Nuxt 3's server-side rendering.
      </PrettyCard>
      <PrettyCard title="Supabase Auth" icon="carbon:password">
        Easy to use authetication with Supabase. Self-hosting available.
      </PrettyCard>
      <PrettyCard title="Icons" icon="carbon:carbon">
        100k+ icons that can be used. Lazily imported.
      </PrettyCard>
      <PrettyCard title="Cloudflare" icon="carbon:api">
        Can be hosted on Cloudflare Pages. Fast and scalable.
      </PrettyCard>
      <PrettyCard title="Tailwind" icon="carbon:paint-brush">
        Tailwind CSS for styling. Bring any of your headless UI components
        without any lock-in.
      </PrettyCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "SupaNuxt Template",
});
</script>
