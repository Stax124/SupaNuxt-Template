import type { Command } from "#ui/types";

export interface CommandEntry extends Command {
  label: string;
  to?: string;
  click?: () => void | Promise<void>;
}
