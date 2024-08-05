<template>
  <section class="my-16 px-4">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">Longitudinal Analysis Models</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
      >
        <CourseCard
          v-for="(course, index) in courses"
          :key="index"
          :title="course.title"
          :description="course.description"
          :link="course.link"
          :background-color="course.backgroundColor"
          :icon="course.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CourseCard from "./LongCard.vue";

const courses = [
  {
    title: "Linear Mixed-Effects Models",
    description: "Learn the fundamentals xxxxxxxxx.",
    link: "#",
    backgroundColor: "linear-gradient(180deg, #4CAF97 0%, #51C6AB 100%)",
    icon: "i-simple-icons-cplusplus",
  },
  {
    title: "Latent Growth Curve Models",
    description: "Description for xxxxxxx",
    link: "#",
    backgroundColor: "linear-gradient(180deg, #5A5EB7 0%, #7075EA 100%)",
    icon: "i-simple-icons-placeholder", // Add appropriate icon
  },
  {
    title: "Longitudinal Invariance Testing",
    description: "Description for xxxxxxxx",
    link: "#",
    backgroundColor: "linear-gradient(180deg, #AF6160 0%, #CA8A89 100%)",
    icon: "i-simple-icons-placeholder", // Add appropriate icon
  },
  // Add more courses as needed
];
</script>

<style scoped>
/* Add any specific styles for the CoursesSection here */
</style>
