<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-center text-green-600">
        Statistics Resources
      </h1>
      <p class="text-lg text-center text-gray-700">
        Explore a variety of resources to enhance your statistical knowledge.
      </p>
    </header>
    <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="resource in resources"
        :key="resource.title"
        class="bg-white rounded-lg shadow-md p-6"
      >
        <h2 class="text-xl font-semibold mb-4">
          {{ resource.title }}
        </h2>
        <component :is="resource.type" :content="resource.content" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    iframe: {
      props: ["content"],
      template:
        '<iframe :src="content" width="100%" height="300" frameborder="0"></iframe>',
    },
    book: {
      props: ["content"],
      template:
        '<a :href="content" class="text-blue-500 underline">Read the Book</a>',
    },
    link: {
      props: ["content"],
      template:
        '<a :href="content" class="text-blue-500 underline">Visit the Course</a>',
    },
  },
  data() {
    return {
      resources: [
        {
          title: "Intro to Statistics",
          type: "iframe",
          content: "https://www.youtube.com/embed/XYZ123",
        },
        { title: "Statistics Book", type: "book", content: "URL_to_book" },
        { title: "Online Course", type: "link", content: "https://course.com" },
        // Add more resources as needed
      ],
    };
  },
};
</script>

<style scoped>
body {
  font-family: "Arial", sans-serif;
}
</style>
