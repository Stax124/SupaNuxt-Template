<template>
  <div
    class="navbar desktop-navbar inline-flex justify-between w-full py-2 pr-1 pl-4"
  >
    <div class="navbar-left flex">
      <ULink to="/" class="flex items-center space-x-2">
        <h1 class="text-2xl font-bold text-primary">
          {{ props.title || "Replace me" }}
        </h1>
      </ULink>
    </div>
    <div class="navbar-center">
      <UHorizontalNavigation :links="links" />
    </div>
    <div
      class="navbar-right flex flex-row align-middle items-center justify-center"
    >
      <ColorPicker />
      <NavbarProfile />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();

const links = [
  {
    label: "Home",
    to: "/",
    icon: "carbon:home",
  },
  {
    label: "Documentation",
    to: "https://stax124.github.io/SupaNuxt-Template/",
    icon: "carbon:book",
    target: "_blank",
  },
  {
    label: "GitHub",
    icon: "carbon:logo-github",
    to: "https://github.com/Stax124/SupaNuxt-Template",
    target: "_blank",
  },
];
</script>
