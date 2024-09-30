<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton
      color="white"
      :label="label"
      icon="carbon:user"
      trailing-icon="carbon:chevron-down"
      variant="ghost"
    >
    </UButton>
  </UDropdown>
</template>

<script setup lang="ts">
import type { HorizontalNavigationLink } from "#ui/types";

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const items = computed<HorizontalNavigationLink[][]>(() => [
  [
    {
      label: "Profile",
      icon: "carbon:user",
      to: "/profile",
    },
  ],
  user.value
    ? [
        {
          label: "Logout",
          icon: "carbon:logout",
          click: signOut,
        },
      ]
    : [
        {
          label: "Login",
          icon: "carbon:login",
          to: "/login",
        },
      ],
]);

const label = computed(() => user.value?.email || "Account");

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = null;
  } catch (error) {
    // @ts-expect-error - alert is a browser API
    alert(error.message);
  }
}
</script>
