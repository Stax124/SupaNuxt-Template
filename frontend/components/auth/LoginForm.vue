<template>
  <div>
    <!-- Email and password -->
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit="onEmailLogin"
    >
      <UFormGroup label="Email" name="email" required>
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password" required>
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit" :loading="loading" icon="carbon:login" block>
        Log in
      </UButton>
    </UForm>

    <hr class="border-gray-200 dark:border-gray-800 my-2" />
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";

export type AuthProvider = "google" | "github" | "gitlab";

const supabase = useSupabaseClient();
const router = useRouter();

const loading = ref(false);

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onEmailLogin(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithPassword({
      email: event.data.email,
      password: event.data.password,
    });
    if (error) throw error;

    router.push("/");
  } catch (error) {
    // @ts-expect-error error.message is not in the type definition
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
}
</script>
