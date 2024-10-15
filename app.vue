<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { seo } = useAppConfig();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", {
  default: () => [],
  server: false,
});

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/logo.svg" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: "https://docs-template.nuxt.dev/social-card.png",
  twitterImage: "https://docs-template.nuxt.dev/social-card.png",
  twitterCard: "summary_large_image",
});

provide("navigation", navigation);
</script>

<template>
  <NuxtLoadingIndicator />
  <AppHeader />
  <UMain>
    <div class="relative group flex mt-5 justify-center items-center">
      <!-- Icon (FontAwesome) -->
      <i class="fas fa-exclamation-triangle text-4xl text-yellow-500" />

      <!-- Hover Text -->
      <div class="bg-gray-800 text-white mt-5 text-sm py-1 px-2 rounded">
        Site under development, current content may not be accurate
      </div>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>
  <AppFooter />
  <ClientOnly>
    <LazyUContentSearch :files="files" :navigation="navigation" />
  </ClientOnly>
  <UNotifications />
</template>
