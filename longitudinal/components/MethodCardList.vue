<template>
  <div>
    <div class="section-header">Difference Scores</div>
    <div class="method-cards-grid">
      <MethodCard
        v-for="(card, index) in differenceScores"
        :key="index"
        :card="card"
        :style="{ '--top-color': card.background }"
      />
    </div>
    <div class="section-header mt-8">Residualized Change Scores</div>
    <div class="method-cards-grid">
      <MethodCard
        v-for="(card, index) in residualizedChangeScores"
        :key="index"
        :card="card"
        :style="{ '--top-color': card.background }"
      />
    </div>
    <div class="section-header mt-8">Linear Mixed-Effects Models</div>
    <div class="method-cards-grid">
      <MethodCard
        v-for="(card, index) in linearMixedEffectsModels"
        :key="index"
        :card="card"
        :style="{ '--top-color': card.background }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MethodCard from "./MethodCard.vue";

interface MethodCard {
  title: string;
  link: string;
  background: string;
}

const differenceScores: MethodCard[] = [
  {
    title: "Basic Model",
    link: "/abcd-study/traditional-linear-models/differencescores_pairedttests",
    background: "#D5A05A",
  },
  {
    title: "Simple Regression",
    link: "/abcd-study/traditional-linear-models/differencescores_simpleregression",
    background: "#D5A05A",
  },
];

const residualizedChangeScores: MethodCard[] = [
  {
    title: "Residualized Change Scores",
    link: "/residualized-change-scores",
    background: "#5A9E6D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#5A9E6D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#5A9E6D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#5A9E6D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#5A9E6D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#5A9E6D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#5A9E6D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#5A9E6D",
  },
];

const linearMixedEffectsModels: MethodCard[] = [
  {
    title: "Linear Mixed Effects Models",
    link: "/linear-mixed-effects-models",
    background: "#7A3E9D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#7A3E9D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#7A3E9D",
  },
  {
    title: "xxxx",
    link: "/xxxx",
    background: "#7A3E9D",
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

.section-header {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff; /* White color */
  text-align: left;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 4px solid #cbd5e0; /* Light gray border */
}

.card-top h3 {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  padding: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
