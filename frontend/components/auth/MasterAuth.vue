<template>
  <UContainer class="max-w-md">
    <UTabs :items="items">
      <template #login>
        <LoginForm />
      </template>
      <template #signup>
        <SignUpForm />
      </template>
    </UTabs>

    <UDivider label="OR" class="my-4" />

    <OAuthLogin />
  </UContainer>
</template>

<script setup lang="ts">
import type { TabItem } from "#ui/types";

const items: TabItem[] = [
  {
    label: "Login",
    slot: "login",
  },
  {
    label: "Sign Up",
    slot: "signup",
  },
];
</script>
