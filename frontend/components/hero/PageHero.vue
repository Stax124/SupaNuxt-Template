<template>
  <UContainer class="mt-12">
    <!-- Tailwind based custom hero -->
    <div class="py-24 px-4 sm:px-6 lg:px-8">
      <!-- Big Icon -->
      <div
        v-if="slots['icon']"
        class="flex items-center justify-center w-16 h-16 mx-auto mb-6"
      >
        <slot name="icon" />
      </div>

      <div class="flex flex-col items-center">
        <h1 class="text-5xl font-bold text-center text-primary">
          {{ props.title || "Hero title" }}
        </h1>
        <p class="mt-4 text-xl dark:text-gray-200 text-gray-700">
          {{ props.description || "Hero description" }}
        </p>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  description?: string;
}>();

const slots = defineSlots();
</script>
