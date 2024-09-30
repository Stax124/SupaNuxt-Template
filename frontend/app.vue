<template>
  <NuxtLoadingIndicator />

  <DesktopNavbar title="Nuxt Template" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
  <UModals />
  <USlideovers />
</template>

<script setup lang="ts">
import DesktopNavbar from "./components/navbar/desktop/DesktopNavbar.vue";
</script>
