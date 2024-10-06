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
