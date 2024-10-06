<template>
  <div class="p-[1px] rounded-xl relative overflow-hidden bg-gray-50/10">
    <div class="p-5 rounded-xl dark:bg-gray-900 bg-gray-100/90 h-full">
      <UIcon
        v-if="props.icon"
        :name="props.icon"
        :size="48"
        class="mb-3 mt-2 text-primary"
      />
      <h2 class="text-xl font-bold dark:text-zinc-50 text-gray-600">
        {{ props.title || "Title" }}
      </h2>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">
        <slot></slot>
      </p>
    </div>
    <div
      ref="blob"
      class="blur-3xl absolute -z-[1] top-0 left-0 w-64 h-64 rounded-[50%] bg-primary"
    ></div>
    <div
      ref="fakeblob"
      class="absolute -z-[1] top-0 left-0 w-64 h-64 rounded-[50%]"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface PrettyCardProps {
  title?: string;
  icon?: string;
}

const props = defineProps<PrettyCardProps>();

const blob = ref<HTMLElement | null>(null);
const fakeblob = ref<HTMLElement | null>(null);

useEventListener("mousemove", (ev) => {
  const rec = fakeblob.value!.getBoundingClientRect();

  blob.value!.animate(
    [
      {
        transform: `translate(${ev.clientX - rec.left - rec.width / 2}px,${
          ev.clientY - rec.top - rec.height / 2
        }px)`,
      },
    ],
    {
      fill: "forwards",
    }
  );
});
</script>
