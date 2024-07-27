<template>
    <div class="flex flex-col items-center py-8">
      <h2 class="text-2xl font-bold mb-6">Explore</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 px-4 mx-auto">
        <a
          v-for="(article, index) in articles"
          :key="index"
          :href="article.link"
          target="_blank"
          :style="{ background: article.background }"
          class="flex flex-col justify-between p-6 rounded-lg shadow-lg text-white text-center h-48"
        >
          <span class="font-semibold text-lg">{{ article.title }}</span>
          <button class="mt-4 py-2 px- bg-white text-black rounded hover:bg-gray-200">View more</button>
        </a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Article {
    title: string;
    link: string;
    background: string;
  }
  
  interface Props {
    articles: Article[];
  }
  
  defineProps<Props>();
  </script>
  
  <style scoped>
  /* Adjusting the card dimensions */
  a {
    min-height: 192px; /* Increase the vertical length */
    width: 100%;       /* Adjust the horizontal length */
  }
  </style>
  