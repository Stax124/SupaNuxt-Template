<template>
  <div>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit="onUpdatePassword"
    >
      <UFormGroup label="Email" name="email" required>
        <UInput v-model="state.email" />
      </UFormGroup>

      <UButton type="submit" :loading="loading" icon="carbon:email" block>
        Send Reset Email
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";

const supabase = useSupabaseClient();
const toast = useToast();

const loading = ref(false);

const schema = z.object({
  email: z.string().email(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
});

async function onUpdatePassword(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    const { error } = await supabase.auth.resetPasswordForEmail(
      event.data.email
    );
    if (error) throw error;
    toast.add({
      title: "Success",
      description: "Password reset email sent",
      icon: "carbon:checkmark",
    });
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
