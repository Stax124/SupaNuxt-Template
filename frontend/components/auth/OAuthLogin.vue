<template>
  <div class="oauth-login-container grid grid-cols-1 gap-2">
    <!-- OAuth -->
    <UButton
      :loading="loading"
      :disabled="loading"
      icon="mdi:google"
      variant="outline"
      @click="() => oauthLogin('google')"
    >
      Log in with Google
    </UButton>
    <!-- <UButton
      :loading="loading"
      :disabled="loading"
      icon="mdi:github"
      variant="outline"
      @click="() => oauthLogin('github')"
    >
      Log in with GitHub
    </UButton> -->
  </div>
</template>

<script setup lang="ts">
export type AuthProvider = "google" | "github" | "gitlab";

const supabase = useSupabaseClient();

const loading = ref(false);

const oauthLogin = async (provider: AuthProvider) => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        queryParams: {
          prompt: "select_account", // Forces the user to select an account
        },
        redirectTo: window.location.origin,
      },
    });
    if (error) throw error;
  } catch (error) {
    // @ts-expect-error error.message is not in the type definition
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>
