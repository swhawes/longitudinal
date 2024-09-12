<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const navigation = inject<Ref<NavItem[]>>("navigation");
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside v-if="!$route.path.includes('/testcontent')" class="sidebar">
          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
        <main :class="{ 'full-width': $route.path.includes('/testcontent') }">
          <nuxt />
        </main>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
