<template>
  <div class="method-cards-grid">
    <MethodCard
      v-for="(card, index) in methodCards"
      :key="index"
      :card="card"
    />
  </div>
</template>

<script setup lang="ts">
import MethodCard from "./MethodCard.vue";

interface MethodCard {
  title: string;
  link: string;
  background: string;
}

const methodCards: MethodCard[] = [
  {
    title: "Difference Scores",
    link: "/difference-scores", // Update to internal link
    background: "#D5A05A",
  },
  {
    title: "Residualized Change Scores",
    link: "/residualized-change-scores", // Update to internal link
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "/xxxx", // Update to internal link
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "/xxxx", // Update to internal link
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "/xxxx", // Update to internal link
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "/xxxx", // Update to internal link
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "/xxxx", // Update to internal link
    background: "#D5A05A",
  },
  {
    title: "xxxx",
    link: "/xxxx", // Update to internal link
    background: "#D5A05A",
  },
];
</script>

<style scoped>
.method-cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default to 1 column */
  gap: 1rem; /* Adjust the gap between cards as needed */
}

@media (min-width: 640px) {
  .method-cards-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (min-width: 1024px) {
  .method-cards-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns for larger screens */
  }
}
</style>
