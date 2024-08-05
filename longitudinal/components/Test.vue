<template>
  <div class="no-sidebar-layout">
    <div class="book-gallery-section">
      <h2>Open Source Books</h2>
      <div class="book-gallery">
        <div v-for="book in books" :key="book.title" class="book">
          <a :href="book.link" target="_blank" rel="noopener noreferrer">
            <img :src="book.image" :alt="book.title" class="book-cover" />
            <h3>{{ book.title }}</h3>
            <p><strong>Author:</strong> {{ book.author }}</p>
            <p><strong>Description:</strong> {{ book.description }}</p>
          </a>
        </div>
      </div>
    </div>

    <div class="video-gallery-section">
      <h2>Videos</h2>
      <div class="video-gallery">
        <div v-for="video in videos" :key="video.title" class="video">
          <iframe :src="video.link" frameborder="0" allowfullscreen />
          <h3>{{ video.title }}</h3>
          <p><strong>Description:</strong> {{ video.description }}</p>
        </div>
      </div>
    </div>

    <div class="tutorial-gallery-section">
      <h2>Interactive Tutorials</h2>
      <div class="tutorial-gallery">
        <div
          v-for="tutorial in tutorials"
          :key="tutorial.title"
          class="tutorial"
        >
          <a :href="tutorial.link" target="_blank" rel="noopener noreferrer">
            <h3>{{ tutorial.title }}</h3>
            <p><strong>Description:</strong> {{ tutorial.description }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const books = ref([
  {
    title: "R for Data Science",
    author: "Hadley Wickham & Garrett Grolemund",
    description:
      "This book will teach you how to do data science with R, covering the entire data analysis workflow.",
    image: "/images/r-for-data-science-cover.jpg",
    link: "https://r4ds.hadley.nz/",
  },
  // Add more books here
]);

const videos = ref([
  {
    title: "Introduction to Data Science",
    link: "https://www.youtube.com/embed/example1",
    description:
      "An introductory video on data science concepts and techniques.",
  },
  // Add more videos here
]);

const tutorials = ref([
  {
    title: "Interactive R Tutorial",
    link: "https://www.example.com/interactive-tutorial",
    description: "An interactive tutorial to learn R programming.",
  },
  // Add more tutorials here
]);
</script>

<style scoped>
.no-sidebar-layout {
  padding: 20px;
}

.book-gallery-section,
.video-gallery-section,
.tutorial-gallery-section {
  padding: 20px;
  margin-bottom: 20px;
}

.book-gallery-section {
  background-color: #f9f9f9;
}

.video-gallery-section {
  background-color: #e9ecef;
}

.tutorial-gallery-section {
  background-color: #d3f9d8;
}

.book-gallery,
.video-gallery,
.tutorial-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}

.book,
.video,
.tutorial {
  text-align: center;
  max-width: 200px;
}

.book-cover,
.video iframe {
  width: 150px;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

h3 {
  margin: 10px 0 5px;
  font-size: 1.1em;
}

p {
  font-size: 0.9em;
  color: #555;
}
</style>
