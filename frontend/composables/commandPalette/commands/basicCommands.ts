import type { CommandEntry } from "./types";

export const pathCommands: CommandEntry[] = [
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
    to: "/auth/login",
  },
  {
    id: "reset-password",
    label: "Reset Password",
    icon: "carbon:password",
    to: "/auth/reset-password",
  },
];
