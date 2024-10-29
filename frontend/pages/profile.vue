<template>
  <UContainer class="mt-8">
    <div class="grid md:grid-cols-4 gap-4">
      <div class="md:col-span-1 col-span-3">
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

useSeoMeta({
  title: "Profile",
});

const route = useRoute();
const user = useSupabaseUser();

const links = computed<HorizontalNavigationLink[]>(() => [
  {
    label: "Profile",
    avatar: {
      src: user.value?.user_metadata.avatar_url,
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
