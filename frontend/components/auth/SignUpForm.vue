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

      <UFormGroup label="Repeat Password" name="repeatPassword" required>
        <UInput v-model="state.repeatPassword" type="password" />
      </UFormGroup>

      <UButton type="submit" :loading="loading" icon="mdi:login" block>
        Sign Up
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
const toast = useToast();

const loading = ref(false);

const schema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(8, "Must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}(?=.*[-+_!@#$%^&*.,?]).*$/,
        "Must contain at least one uppercase letter, one lowercase letter, one number and a special character"
      ),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
  repeatPassword: undefined,
});

async function onEmailLogin(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signUp({
      email: event.data.email,
      password: event.data.password,
    });
    if (error) throw error;
  } catch (error) {
    toast.add({
      title: "Error",
      // @ts-expect-error error.message is not in the type definition
      description: error.error_description || error.message,
      icon: "carbon:error",
    });
  } finally {
    loading.value = false;
  }
}
</script>
