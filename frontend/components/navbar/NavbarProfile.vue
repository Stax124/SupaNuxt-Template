<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" trailing-icon="carbon:chevron-down" variant="ghost">
      <template #leading>
        <UAvatar
          v-if="user?.user_metadata.avatar_url"
          :src="user?.user_metadata.avatar_url"
          size="xs"
        />
        <UAvatar v-else size="xs" icon="carbon:user" />
      </template>
    </UButton>
  </UDropdown>
</template>

<script setup lang="ts">
import type { HorizontalNavigationLink } from "#ui/types";

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const items = computed<HorizontalNavigationLink[][]>(() => {
  const data: HorizontalNavigationLink[][] = [];

  if (user.value) {
    data.push([
      {
        label: "Profile",
        icon: "carbon:user",
        to: "/profile",
      },
    ]);
  }

  if (user.value) {
    data.push([
      {
        label: "Logout",
        icon: "carbon:logout",
        click: signOut,
      },
    ]);
  } else {
    data.push([
      {
        label: "Login",
        icon: "carbon:login",
        to: "/login",
      },
    ]);
  }

  return data;
});

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
