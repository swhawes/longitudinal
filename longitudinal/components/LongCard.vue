<template>
  <div
    class="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
  >
    <div
      :style="{ background: backgroundColor }"
      class="flex items-center justify-center p-4"
    >
      <i :class="icon" class="text-3xl text-white mr-2" />
      <h3 class="text-lg font-semibold text-white">
        {{ title }}
      </h3>
    </div>
    <div
      class="bg-black flex flex-col items-center justify-center text-center p-4 h-48"
    >
      <p class="text-gray-300 mb-4">
        {{ description }}
      </p>
      <a
        :href="link"
        target="_blank"
        class="mt-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        View Course
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  link: String,
  backgroundColor: String,
  icon: String,
});
</script>

<style scoped>
/* Add any specific styles for the CourseCard here */
</style>
