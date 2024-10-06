<template>
  <div
    class="navbar desktop-navbar inline-flex justify-between w-full py-2 pr-1 pl-4"
  >
    <div class="navbar-left">
      <ULink to="/" class="flex items-center space-x-2">
        <h1 class="text-2xl font-bold text-primary">
          {{ props.title || "Replace me" }}
        </h1>
      </ULink>
    </div>
    <div class="navbar-right inline-flex">
      <ColorPicker />
      <NavbarProfile />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
</script>
