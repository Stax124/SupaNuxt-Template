<template>
  <UModal v-model="modelVisible">
    <UCommandPalette
      ref="commandPaletteRef"
      :groups="groups"
      :autoselect="false"
      @update:model-value="onSelect"
    />
  </UModal>
</template>

<script setup lang="ts">
import type { Command, Group } from "#ui/types";

const router = useRouter();

const commandPaletteRef = ref();
const modelVisible = ref(false);

interface CommandEntry extends Command {
  label: string;
  to?: string;
}

const groups = computed<Group[]>(() => [
  {
    key: "points-of-interest",
    commands: [
      {
        id: "home",
        label: "Home",
        icon: "carbon:home",
        to: "/",
      },
      {
        id: "login",
        label: "Login",
        icon: "carbon:user",
        to: "/login",
      },
    ] as CommandEntry[],
    filter: (query: string, commands: CommandEntry[]) => {
      return commands.filter((command) =>
        command.label.toLowerCase().startsWith(query.toLowerCase())
      );
    },
  },
]);

function onSelect(option: CommandEntry) {
  if (option.to) {
    router.push(option.to);
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
});
</script>
