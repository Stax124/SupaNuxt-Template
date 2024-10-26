import { useNuxtApp } from "#app";
import type { CommandEntry } from "./types";

export function useUserCommands() {
  const { $dispatch } = useNuxtApp();

  const userCommands: CommandEntry[] = [
    {
      id: "logout",
      label: "Logout",
      icon: "carbon:logout",
      click() {
        $dispatch("command:logout");
      },
    },
    {
      id: "update-password",
      label: "Update Password",
      icon: "carbon:password",
      to: "/auth/update-password",
    },
    {
      id: "profile",
      label: "Profile",
      icon: "carbon:user",
      to: "/profile",
    },
  ];

  return { userCommands };
}

// Type declaration for better TypeScript support
export type UseUserCommandsReturn = ReturnType<typeof useUserCommands>;
