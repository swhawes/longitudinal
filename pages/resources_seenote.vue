# This file can be deleted once resources is functioning correctly in the
content folder
<template>
  <div class="wrapper">
    <header class="r-header flex justify-center items-center text-white h-64">
      <div class="r-logo-animation flex items-end">
        <img src="/images/r-logo.png" alt="Learn R" class="w-32 h-32" />
        <span class="text-4xl font-bold ml-2">esources</span>
      </div>
    </header>
    <header class="header bg-white p-4 text-black h-20">
      <nav class="navigation flex justify-center gap-4 h-full items-center">
        <NuxtLink to="#books" class="nav-button"> Books </NuxtLink>
        <NuxtLink to="#interactive" class="nav-button">
          Interactive tutorials
        </NuxtLink>
        <NuxtLink to="#videos" class="nav-button"> Videos </NuxtLink>
        <NuxtLink to="#cheatsheets" class="nav-button"> Cheatsheets </NuxtLink>
        <NuxtLink to="#text-tutorials" class="nav-button"> Blogs </NuxtLink>
      </nav>
    </header>
    <main class="neve-main">
      <section id="books">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-center mb-4">Open Source R</h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <BookCard
              v-for="(book, index) in books"
              :key="index"
              :title="book.title"
              :author="book.author"
              :description="book.description"
              :image="book.image"
              :link="book.link"
            />
          </div>
        </div>
      </section>

      <section id="videos" class="py-8 bg-gray-200 dark:bg-white">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-center text-black mb-4">
            Instructional Videos
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(video, index) in videos" :key="index" class="video">
              <iframe
                :src="video.link"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full h-64"
              />
              <h3 class="text-lg font-semibold mt-2">
                {{ video.title }}
              </h3>
              <p>{{ video.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="interactive">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-center mb-4">
            Interactive Tutorials
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="(tutorial, index) in tutorials"
              :key="index"
              class="tutorial"
            >
              <a
                :href="tutorial.link"
                target="_blank"
                rel="noopener noreferrer"
                class="block bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg"
              >
                <h3 class="text-lg font-semibold">{{ tutorial.title }}</h3>
                <p>{{ tutorial.description }}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="cheatsheets" class="py-8 bg-blue-100 dark:bg-white">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-center mb-4 text-black">
            Cheatsheets
          </h2>
          <!-- Add cheatsheets content here -->
        </div>
      </section>

      <section id="additional-tutorials">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-center mb-4">
            Add additional tutorials
          </h2>
          <!-- Add text-based tutorials content here -->
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BookCard from "~/components/BookCard.vue";

const books = ref([
  {
    title: "R for Data Science",
    author: "Hadley Wickham & Garrett Grolemund",
    description:
      "This book will teach you how to do data science with R, covering the entire data analysis workflow.",
    image: "/images/r-for-data-science-cover.jpg",
    link: "https://r4ds.hadley.nz/",
  },
  {
    title: "Advanced R",
    author: "Hadley Wickham",
    description:
      "A deep dive into the R language, helping you understand R's data structures and programming paradigms.",
    image: "/images/advanced-r.png",
    link: "https://adv-r.hadley.nz/",
  },
  {
    title: "Efficient R Programming",
    author: "Colin Gillespie & Robin Lovelace",
    description:
      "This book provides tools and techniques to make your R code more efficient.",
    image: "/images/efficient-r-programming.png",
    link: "https://csgillespie.github.io/efficientR/",
  },
  {
    title: "R Programming for Data Science",
    author: "Roger D. Peng",
    description:
      "A comprehensive introduction to R programming for data science, covering fundamental concepts and techniques.",
    image: "/images/r-programming-for-data-science.png",
    link: "https://bookdown.org/rdpeng/RProgDA/",
  },
  {
    title: "Hands-On Programming with R",
    author: "Garrett Grolemund",
    description:
      "This book provides a practical introduction to programming with R, focusing on hands-on experience and real-world examples.",
    image: "/images/hands-on-programming-with-r.jpg",
    link: "https://rstudio-education.github.io/hopr/",
  },
  {
    title: "R Inferno",
    author: "Patrick Burns",
    description:
      "A guide to the pitfalls of R, providing insights into common errors and how to avoid them.",
    image: "/images/r-inferno.jpg",
    link: "http://www.burns-stat.com/pages/Tutor/R_inferno.pdf",
  },
  {
    title: "Software for Data Analysis with R",
    author: "John M. Chambers",
    description:
      "This book covers software development for data analysis, with a focus on R and its applications.",
    image: "/images/software-for-data-analysis-with-r.jpg",
    link: "https://bookdown.org/rdpeng/RProgDA/",
  },
  {
    title: "The Pirate's Guide to R",
    author: "Nathaniel D. Phillips",
    description:
      "A fun and accessible introduction to R, presented in a pirate-themed format to engage readers.",
    image: "/images/yarrr-the-pirates-guide-to-r.jpeg",
    link: "https://bookdown.org/ndphillips/YaRrr/",
  },
  {
    title: "The Art of R Programming",
    author: "Norman Matloff",
    description:
      "This book provides a comprehensive guide to R programming, covering everything from basic concepts to advanced techniques.",
    image: "/images/the-art-of-r-programming.jpg",
    link: "https://web.cs.ucdavis.edu/~matloff/matloff/public_html/145/PLN/RMaterials/NSPpart.pdf",
  },
  {
    title: "Deep R Programming",
    author: "Roger D. Peng",
    description:
      "An in-depth exploration of R programming, focusing on advanced topics and techniques.",
    image: "/images/deep-r-programming.png",
    link: "https://deepr.gagolewski.com/",
  },
]);

const videos = ref([
  {
    title: "Introduction to Data Science",
    link: "https://www.youtube.com/embed/example1",
    description:
      "An introductory video on data science concepts and techniques.",
  },
  {
    title: "Advanced R Programming",
    link: "https://www.youtube.com/embed/videoseries?list=PLm-R300a1uRfH-cy2-KuOD7gHzSRFnX-h",
    description: "A deep dive into advanced R programming topics.",
  },
  {
    title: "Data Wrangling with R",
    link: "https://www.youtube.com/embed/videoseries?si=dNM2v87Ri3byUhe-&amp;list=PLEiEAq2VkUUKAw0aAJ1W4jpZ1q9LpX4yG",
    description: "Learn the essentials of data wrangling with R.",
  },
]);

const tutorials = ref([
  {
    title: "Interactive R Tutorial",
    link: "https://www.example.com/interactive-tutorial",
    description: "An interactive tutorial to learn R programming.",
  },
  {
    title: "Another Interactive Tutorial",
    link: "https://www.example.com/another-interactive-tutorial",
    description:
      "Another great interactive tutorial for learning advanced R programming techniques.",
  },
]);
</script>

<style scoped>
.r-logo-animation {
  display: flex;
  align-items: flex-end; /* Align items to the bottom */
}

.r-logo-animation img {
  margin-bottom: -5px; /* Adjust this value as needed */
}

.text-4xl {
  font-size: 2.25rem; /* Tailwind text-4xl equivalent */
}

.font-bold {
  font-weight: 700; /* Tailwind font-bold equivalent */
}

.ml-2 {
  margin-left: 0.5rem; /* Tailwind ml-2 equivalent */
}

.nav-button {
  @apply inline-block px-4 py-2 bg-gray-800 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-600;
}

.wrapper {
  font-family: "Arial", sans-serif;
}

.header {
  background-color: #ffffff;
}

.neve-main {
  padding-top: 20px;
  padding-bottom: 20px;
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
