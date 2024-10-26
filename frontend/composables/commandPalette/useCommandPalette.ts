import { useSupabaseUser } from "#imports";
import type { Group } from "#ui/types";
import { computed } from "vue";
import { pathCommands } from "./commands/basicCommands";
import type { CommandEntry } from "./commands/types";
import { useUserCommands } from "./commands/userCommands";

export function useCommandGroups() {
  const user = useSupabaseUser();
  const { userCommands } = useUserCommands();

  function filterCommands(query: string, commands: CommandEntry[]) {
    return commands.filter((command) =>
      command.label.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  const commandGroups = computed<Group[]>(() => {
    const groups: Group[] = [
      {
        key: "standart-paths",
        commands: pathCommands,
      },
    ];

    if (user.value) {
      groups.unshift({
        key: "user-commands",
        commands: userCommands,
      });
    }

    // Sort individual groups
    groups.forEach((group) => {
      group.commands?.sort((a, b) => a.label.localeCompare(b.label));
    });

    return groups;
  });

  return {
    commandGroups,
    filterCommands,
  };
}

// Type declaration for better TypeScript support
export type UseCommandGroupsReturn = ReturnType<typeof useCommandGroups>;
