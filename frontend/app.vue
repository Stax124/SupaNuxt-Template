<template>
  <NuxtLoadingIndicator />

  <Navbar title="Nuxt Template" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
  <UModals />
  <USlideovers />
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style>
html.dark {
  background-color: rgb(var(--color-gray-900));
}

html.light {
  background-color: rgb(var(--color-gray-100));
}
</style>
