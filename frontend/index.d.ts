/* eslint-disable no-unused-vars */

type ApplicationEvents = {
  "command:open-search": undefined;
  "command:logout": undefined;
};

declare module "#app" {
  interface NuxtApp {
    $dispatch(
      event: keyof ApplicationEvents,
      data?: ApplicationEvents[keyof ApplicationEvents]
    ): void;
    $listen(
      event: keyof ApplicationEvents,
      handler: (data: unknown) => void
    ): void;
  }
}

export {};
