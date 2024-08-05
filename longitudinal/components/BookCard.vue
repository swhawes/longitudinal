<template>
  <div class="book">
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img :src="image" :alt="title" class="book-cover" />
      <h3>{{ title }}</h3>
      <p><strong>Author:</strong> {{ author }}</p>
      <p><strong>Description:</strong> {{ description }}</p>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  author: String,
  description: String,
  image: String,
  link: String
})
</script>

<style scoped>
.book {
  text-align: center;
  margin: 10px;
  max-width: 200px;
}
.book-cover {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
