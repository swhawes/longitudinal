<template>
  <div class="articles-grid">
    <ArticleCard
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";

interface Article {
  title: string;
  link: string;
  background: string;
}

const articles: Article[] = [
  {
    title: "Data Wrangling",
    link: "abcd-study/data-wrangling",
    background: "linear-gradient(180deg, #4CAF97 0%, #51C6AB 100%)",
  },
  {
    title: "Models for Two Time Points",
    // link: "abcd-study/",
    background: "linear-gradient(180deg, #5A5EB7 0%, #7075EA 100%)",
  },
  {
    title: "Traditional Linear Models",
    link: "abcd-study/traditional-linear-models",
    background: "linear-gradient(180deg, #AF6160 0%, #CA8A89 100%)",
  },
  {
    title: "Traditional Nonlinear Models",
    link: "abcd-study/traditional-nonlinear-models",
    background: "linear-gradient(180deg, #674A98 0%, #A594C3 100%)",
  },
  {
    title: "Structural Equation Models",
    link: "abcd-study/sem-models",
    background: "linear-gradient(180deg, #25879C 0%, #54C3DB 100%)",
  },
  {
    title: "Advanced Structural Equation Models",
    link: "abcd-study/advanced-sem-models",
    background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)",
  },
  {
    title: "Neuroimaging Models",
    link: "abcd-study/neuroimaging-models",
    background: "linear-gradient(180deg, #CC733E 0%, #EAA378 100%)",
  },
  {
    title: "Twin and Genetics Models",
    link: "abcd-study/twin-genetics-models",
    background: "linear-gradient(180deg, #F1637C 0%, #E399A6 100%)",
  },
  {
    title: "Additional Model Set to be Added",
    // link: "abcd-study/",
    background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)",
  },
  {
    title: "Additional Model Set to be Added",
    // link: "abcd-study/",
    background: "linear-gradient(180deg, #CC733E 0%, #EAA378 100%)",
  },
];
</script>

<style scoped>
.articles-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default to 1 column */
  gap: 1rem; /* Adjust the gap between cards as needed */
}

@media (min-width: 640px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for larger screens */
  }
}
</style>
