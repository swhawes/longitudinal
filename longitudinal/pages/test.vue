<template>
    <CoursesSection />
</template>

<script setup>
import CoursesSection from "~/components/LongSection.vue";
</script>

<style scoped>
.header {
  height: 20px;
  background-color: #ffffff;
}

.nav-button {
  @apply inline-block px-4 py-2 bg-gray-800 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-600;
}

.new-page {
  font-family: "Arial", sans-serif;
}

.courses-section {
  padding: 20px;
  background-color: #f9f9f9;
}
</style>
