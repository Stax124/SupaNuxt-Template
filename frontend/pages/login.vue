<template>
  <UContainer class="grid gap-1 w-full justify-center">
    <!-- Email and password -->
    <UInput
      v-model="email"
      label="Email"
      type="email"
      placeholder="Email"
      icon="mdi:email"
    />
    <UInput
      v-model="password"
      label="Password"
      type="password"
      placeholder="Password"
      icon="mdi:lock"
    />
    <UButton
      :loading="loading"
      :disabled="loading"
      icon="mdi:login"
      @click="emailLogin"
    >
      Log in
    </UButton>

    <hr class="border-gray-200 dark:border-gray-800 my-2" />

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
    <UButton
      :loading="loading"
      :disabled="loading"
      icon="mdi:github"
      variant="outline"
      @click="() => oauthLogin('github')"
    >
      Log in with GitHub
    </UButton>
  </UContainer>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");
const password = ref("");

export type AuthProvider = "google" | "github" | "gitlab";

const oauthLogin = async (provider: AuthProvider) => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    if (error) throw error;
  } catch (error) {
    // @ts-expect-error error.message is not in the type definition
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};

const emailLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
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
