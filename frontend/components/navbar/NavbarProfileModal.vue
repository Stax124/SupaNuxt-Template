<template>
  <UModal v-model="modalVisible">
    <UCard>
      <template #header>
        <div class="inline-flex justify-between w-full">
          <ULink to="/" class="flex items -center space-x-2">
            <h1 class="text-2xl font-bold text-primary">Profile</h1>
          </ULink>

          <UButton
            aria-label="Close menu"
            variant="ghost"
            @click="modalVisible = false"
          >
            <UIcon name="carbon:close" class="text-xl" />
          </UButton>
        </div>
      </template>

      <UVerticalNavigation :links="props.links" />
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import type { HorizontalNavigationLink } from "#ui/types";

const props = defineProps<{
  links: HorizontalNavigationLink[][];
}>();

const modalVisible = defineModel<boolean>();
</script>
