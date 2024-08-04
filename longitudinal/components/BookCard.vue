<template>
  <div class="book-card">
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img :src="image" :alt="title" class="book-cover" />
      <div class="book-info">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;
}
.book-card:hover {
  transform: scale(1.05);
}
.book-cover {
  max-width: 150px;
  height: auto;
  margin-bottom: 16px;
}
.book-info h3 {
  font-size: 1.2em;
  margin: 0;
}
.book-info p {
  font-size: 0.9em;
  color: #666;
}
</style>
