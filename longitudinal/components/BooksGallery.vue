<template>
  <div class="books-gallery">
    <div v-for="book in books" :key="book.title" class="book-card">
      <a :href="book.link" target="_blank" rel="noopener noreferrer">
        <img :src="book.image" :alt="book.title" class="book-cover" />
        <span>{{ book.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooksGallery",
  data() {
    return {
      books: [
        {
          title: "R for Data Science",
          link: "https://r4ds.hadley.nz/",
          image: "/images/r-for-data-science-cover.jpg", // Ensure the path is correct
        },
        // Add more book objects as needed
      ],
    };
  },
};
</script>

<style scoped>
.books-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.book-card {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}
.book-cover {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}
</style>
