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
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
};
</script>
