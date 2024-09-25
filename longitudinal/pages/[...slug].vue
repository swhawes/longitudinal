<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";
import { useRoute } from "#app"; // Removing useFetch since it's not used below

const route = useRoute();
const { toc, seo } = useAppConfig(); // Keeping both 'toc' and 'seo'

definePageMeta({
  layout: "docs",
});

// Fetch page data
const { data: page, error } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);
console.log("Requested Path:", route.path);
console.log("Fetched Page:", page);

if (error.value || !page.value) {
  console.error("Error fetching page:", error?.value); // Merged both error-handling approaches
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

// Fetch surrounding content for navigation
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryContent()
    .where({ _extension: "md", navigation: { $ne: false } })
    .only(["title", "description", "_path"])
    .findSurround(withoutTrailingSlash(route.path))
);

// SEO Metadata
useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description,
});

// Define OG image for social sharing
defineOgImage({
  component: "Docs",
  title: page.value.title,
  description: page.value.description,
});

// Computed values for headline and links
const headline = computed(() => findPageHeadline(page.value));

const links = computed(() =>
  [
    toc?.bottom?.edit && {
      icon: "i-heroicons-pencil-square",
      label: "Edit this page",
      to: `${toc.bottom.edit}/${page?.value?._file}`,
      target: "_blank",
    },
    ...(toc?.bottom?.links || []),
  ].filter(Boolean)
);
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :headline="headline"
    />

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />

      <hr v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page.toc !== false" #right>
      <UContentToc :title="toc?.title" :links="page.body?.toc?.links">
        <template v-if="toc?.bottom" #bottom>
          <div
            class="hidden lg:block space-y-6"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks :title="toc.bottom.title" :links="links" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
