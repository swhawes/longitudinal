<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import AppSubheader from "./AppSubheader.vue"; // Import the new Subheader component

const navigation = inject<NavItem[]>("navigation", []);

const { header } = useAppConfig();
</script>

<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        <span class="highlighted-logo">Longitudinal.dev</span> <UBadge label="Docs" variant="subtle" class="mb-0.5" />
      </template>
    </template>

    <template v-if="header?.search" #center>
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        :label="null"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
  <!-- Use the Subheader Component -->
  <AppSubheader />
</template>

<style scoped>
.highlighted-logo {
  color: white; /* Adjust color if needed */
  text-shadow: 0 0 10px #00DC82; /* Nuxt green shadow */
  border: 2px solid #00DC82; /* Nuxt green border */
  padding: 0.25rem; /* Adjust padding as needed */
  display: inline-block;
  box-shadow: 0 0 10px #00DC82; /* Nuxt green box shadow */
  border-radius: 0.25rem; /* Optional: round the corners */
}
</style>

