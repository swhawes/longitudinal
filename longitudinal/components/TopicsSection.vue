<template>
  <section class="my-16 px-4">
    <div class="container mx-auto">
      <!-- Web Development Section -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">Web Development</h2>
        <a
          href="https://www.geeksforgeeks.org/web-development/?ref=home_viewall_row3"
          target="_blank"
          class="text-green-500 hover:text-green-600"
        >
          View All
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div
          v-for="(card, index) in webDevCards"
          :key="index"
          class="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div
            :style="{ background: card.background }"
            class="flex items-center justify-center p-4"
          >
            <h3 class="text-lg font-semibold text-white">
              {{ card.title }}
            </h3>
          </div>
          <div
            class="bg-black flex items-center justify-center text-center p-4"
          >
            <a
              :href="card.link"
              target="_blank"
              class="mt-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              <span class="icon" />
            </a>
          </div>
        </div>
      </div>

      <!-- DSA Section -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">DSA</h2>
        <a
          href="https://www.geeksforgeeks.org/data-structures/?ref=home_viewall_row3"
          target="_blank"
          class="text-green-500 hover:text-green-600"
        >
          View All
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(card, index) in dsaCards"
          :key="index"
          class="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div
            :style="{ background: card.background }"
            class="flex items-center justify-center p-4"
          >
            <h3 class="text-lg font-semibold text-white">
              {{ card.title }}
            </h3>
          </div>
          <div
            class="bg-black flex items-center justify-center text-center p-4"
          >
            <a
              :href="card.link"
              target="_blank"
              class="mt-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              <span class="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  webDevCards: {
    type: Array,
    required: true,
  },
  dsaCards: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Add any specific styles for the TopicsSection here */
</style>
