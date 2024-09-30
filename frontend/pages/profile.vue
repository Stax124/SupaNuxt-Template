<template>
  <UContainer class="mt-12">
    <div class="grid grid-cols-4 gap-2">
      <div class="col-span-1">
        <UVerticalNavigation :links="links" />
      </div>
      <div class="col-span-3">
        <NuxtPage />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { HorizontalNavigationLink } from "#ui/types";

const route = useRoute();

const links = computed<HorizontalNavigationLink[]>(() => [
  {
    label: "Name",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    to: "/profile",
    active: route.fullPath === "/profile",
  },
  {
    label: "Invoices",
    icon: "carbon:document",
    to: "/profile/invoices",
  },
  {
    label: "Plan",
    icon: "carbon:purchase",
    to: "/profile/plan",
  },
  {
    label: "Settings",
    icon: "carbon:settings",
    to: "/profile/settings",
  },
]);
</script>
