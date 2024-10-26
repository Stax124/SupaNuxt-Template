<template>
  <UModal
    v-model="modelVisible"
    :ui="{
      container:
        'flex min-h-full items-start sm:items-center justify-center text-center',
    }"
  >
    <UCommandPalette
      ref="commandPaletteRef"
      :groups="commandGroups"
      :autoselect="false"
      :fuse="{
        fuseOptions: {
          shouldSort: true,
          threshold: 0.4,
        },
      }"
      @update:model-value="onSelect"
    />
  </UModal>
</template>

<script setup lang="ts">
import type { CommandEntry } from "~/composables/commandPalette/commands/types";

const router = useRouter();
const { commandGroups } = useCommandGroups();

const commandPaletteRef = ref();
const modelVisible = ref(false);
const { $listen } = useNuxtApp();

async function onSelect(option: CommandEntry) {
  if (option.to) {
    router.push(option.to);
  } else if (option.click) {
    // Handle both sync and async click handlers
    Promise.resolve(option.click()).catch((e) => {
      console.error(e);
    });
  }

  modelVisible.value = false;
}

defineShortcuts({
  ctrl_k: () => {
    modelVisible.value = true;
    commandPaletteRef.value?.focus();
  },
  "/": () => {
    modelVisible.value = true;
    commandPaletteRef.value?.focus();
  },
  ctrl_p: () => {
    modelVisible.value = true;
    commandPaletteRef.value?.focus();
  },
});

$listen("command:open-search", () => {
  modelVisible.value = true;
});
</script>
