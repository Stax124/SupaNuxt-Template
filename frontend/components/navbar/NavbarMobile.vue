<template>
  <div class="navbar-mobile">
    <UButton
      aria-label="Toggle menu"
      variant="ghost"
      @click="showMenu = !showMenu"
    >
      <UIcon name="carbon:menu" class="text-2xl" />
    </UButton>

    <USlideover v-model="showMenu" side="left">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="inline-flex justify-between w-full">
            <ULink to="/" class="flex items -center space-x-2">
              <h1 class="text-2xl font-bold text-primary">
                {{ props.title || "Replace me" }}
              </h1>
            </ULink>

            <UButton
              aria-label="Close menu"
              variant="ghost"
              @click="showMenu = false"
            >
              <UIcon name="carbon:close" class="text-xl" />
            </UButton>
          </div>
        </template>

        <UVerticalNavigation :links="props.links" />

        <template #footer>
          <div class="flex flex-col gap-2">
            <UButton
              aria-label="Quick search"
              block
              icon="carbon:search"
              variant="outline"
              @click="
                () => {
                  showMenu = false;
                  $dispatch('command:open-search');
                }
              "
              >Quick Search</UButton
            >

            <div class="grid grid-cols-2 gap-2">
              <ColorPicker />
              <NavbarProfile />
            </div>
          </div>
        </template>
      </UCard>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
import type { VerticalNavigationLink } from "#ui/types";
import { ref } from "vue";

const { $dispatch } = useNuxtApp();
const route = useRoute();

const props = defineProps<{
  title?: string;
  links: VerticalNavigationLink[];
}>();

const showMenu = ref(false);

watch(route, () => {
  showMenu.value = false;
});
</script>
