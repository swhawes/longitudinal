<script setup lang="ts">
import ExploreSection from "~/components/ExploreSection.vue";
import CoursesSection from "~/components/CoursesSection.vue";
import TopicsSection from "~/components/TopicsSection.vue";
import FetchJson from "~/components/FetchJson.vue"; // Import the FetchJson component

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
    title: "Data Wrangling",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #4CAF97 0%, #51C6AB 100%)",
  },
  {
    title: "Models for Two Time Points",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #5A5EB7 0%, #7075EA 100%)",
  },
  {
    title: "Traditional Linear Models",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #AF6160 0%, #CA8A89 100%)",
  },
  {
    title: "Traditional Nonlinear Models",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #674A98 0%, #A594C3 100%)",
  },
  {
    title: "Structural Equation Models",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #25879C 0%, #54C3DB 100%)",
  },
  {
    title: "Advanced Structural Equation Models",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)",
  },
  {
    title: "Neuroimaging Models",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #CC733E 0%, #EAA378 100%)",
  },
  {
    title: "Twin and Genetics Models",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #F1637C 0%, #E399A6 100%)",
  },
  {
    title: "Additional Model Set to be Added",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)",
  },
  {
    title: "Additional Model Set to be Added",
    link: "https://www.google.com",
    background: "linear-gradient(180deg, #CC733E 0%, #EAA378 100%)",
  },
];

const webDevCards = [
  {
    title: "Difference Scores",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
  {
    title: "Residualized Change Scores",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "https://www.google.com",
    background: "#D5A05A",
  },
];

const dsaCards = [
  {
    title: "Linear Mixed-Effects Models",
    link: "https://www.google.com",
    background: "#F1637C",
  },
  {
    title: "xxxxxx",
    link: "https://www.google.com",
    background: "#F1637C",
  },
  {
    title: "xxxxxx",
    link: "https://www.google.com",
    background: "#F1637C",
  },
  {
    title: "xxxxxx",
    link: "https://www.google.com",
    background: "#F1637C",
  },
  {
    title: "xxxxxx",
    link: "https://www.google.com",
    background: "#F1637C",
  },
  {
    title: "xxxxxx",
    link: "https://www.google.com",
    background: "#F1637C",
  },
  {
    title: "xxxxxx",
    link: "https://www.google.com",
    background: "#F1637C",
  },
  {
    title: "xxxxxx",
    link: "https://www.google.com",
    background: "#F1637C",
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
    <TopicsSection :web-dev-cards="webDevCards" :dsa-cards="dsaCards" />
    <FetchJson />
    <!-- Add FetchJson component here -->
  </div>
</template>

<style scoped>
/* Optional additional styles */
</style>
