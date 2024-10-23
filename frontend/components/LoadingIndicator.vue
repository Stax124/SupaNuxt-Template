<script setup lang="ts">
import { useLoadingIndicator } from "#app/composables/loading-indicator";
import { computed, type StyleValue } from "vue";

// Define props
const props = defineProps({
  throttle: {
    type: Number,
    default: 200,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  height: {
    type: Number,
    default: 3,
  },
});

// Use loading indicator composable
const { progress, isLoading, error, start, finish, clear } =
  useLoadingIndicator({
    duration: props.duration,
    throttle: props.throttle,
  });

// Expose methods and state
defineExpose({
  progress,
  isLoading,
  error,
  start,
  finish,
  clear,
});

// Compute styles
const styles = computed<StyleValue>(() => ({
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  pointerEvents: "none",
  width: "auto",
  height: `${props.height}px`,
  opacity: isLoading.value ? 1 : 0,
  backgroundSize: `${(100 / progress.value) * 100}% auto`,
  transform: `scaleX(${progress.value}%)`,
  transformOrigin: "left",
  transition: "transform 0.1s, height 0.4s, opacity 0.4s",
  zIndex: 999999,
}));
</script>

<template>
  <div class="nuxt-loading-indicator bg-primary" :style="styles">
    <slot />
  </div>
</template>
