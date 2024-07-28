<script setup lang="ts">
import ExploreSection from "~/components/ExploreSection.vue";
import CoursesSection from "~/components/CoursesSection.vue";

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  titleTemplate: "",
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});

const articles = [
  {
    title: "Data Structure and Algorithms",
    link: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=home-articlecards",
    background: "linear-gradient(180deg, #4CAF97 0%, #51C6AB 100%)",
  },
  {
    title: "Practice DSA",
    link: "https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions&ref=home-articlecards",
    background: "linear-gradient(180deg, #5A5EB7 0%, #7075EA 100%)",
  },
  {
    title: "AI ML & Data Science",
    link: "https://www.geeksforgeeks.org/ai-ml-ds/?ref=home-articlecards",
    background: "linear-gradient(180deg, #AF6160 0%, #CA8A89 100%)",
  },
  {
    title: "Web Development",
    link: "https://www.geeksforgeeks.org/web-development/?ref=home-articlecards",
    background: "linear-gradient(180deg, #674A98 0%, #A594C3 100%)",
  },
  {
    title: "Python",
    link: "https://www.geeksforgeeks.org/python-programming-language/?ref=home-articlecards",
    background: "linear-gradient(180deg, #25879C 0%, #54C3DB 100%)",
  },
  {
    title: "Machine Learning",
    link: "https://www.geeksforgeeks.org/machine-learning/?ref=home-articlecards",
    background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)",
  },
  {
    title: "System Design",
    link: "https://www.geeksforgeeks.org/system-design-tutorial/?ref=home-articlecards",
    background: "linear-gradient(180deg, #CC733E 0%, #EAA378 100%)",
  },
  {
    title: "DevOps",
    link: "https://www.geeksforgeeks.org/devops-tutorial/?ref=home-articlecards",
    background: "linear-gradient(180deg, #F1637C 0%, #E399A6 100%)",
  },
];
</script>

<template>
  <div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>
          {{ page.hero.headline.label }}
          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>

      <template #title>
        <div :class="page.hero.titleClasses">
          <MDC :value="page.hero.title" />
        </div>
      </template>

      <MDC
        :value="page.hero.code"
        tag="pre"
        class="prose prose-primary dark:prose-invert mx-auto"
      />
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) of page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ExploreSection :articles="articles" />

    <CoursesSection />
  </div>
</template>

<style scoped>
/* Optional additional styles */
</style>
