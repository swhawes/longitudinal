<template>
  <section class="acknowledgments-section">
    <div class="container mx-auto">
      <h2 class="section-title text-black">Acknowledgments</h2>
      <div class="labs-container">
        <div v-for="lab in labs" :key="lab.alt" class="lab-card">
          <a :href="lab.link" target="_blank">
            <img :src="lab.logo" :alt="lab.alt" class="lab-logo" />
          </a>
          <h3>{{ lab.name }}</h3>
          <p>{{ lab.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const labs = [
  {
    logo: "/images/abcd-study-logo.png",
    alt: "ABCD Study logo",
    link: "https://abcdstudy.org/",
  },
  {
    logo: "/images/sunlab-logo.jpeg",
    alt: "SUN Lab logo",
    link: "https://sunlab.fiu.edu/",
  },
  {
    logo: "/images/wallerlab-logo.png",
    alt: "Waller Lab logo",
    link: "https://upennedenlab.com/",
  },
  {
    logo: "/images/ccf-logo.jpg",
    alt: "CCF logo",
    link: "https://ccf.fiu.edu/",
  },
  // Add more labs as needed
];
</script>

<style scoped>
.acknowledgments-section {
  padding: 3rem 1.5rem;
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
}

.labs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.lab-card {
  flex: 0 0 auto;
  background-color: white;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  padding: 1.5rem;
  border-radius: 8px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lab-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(2, 4, 32, 0.25); /* Subtle shadow with dark blue tint  */
  background-color: rgba(128, 128, 128, 0.1); /* Dark blue spotlight effect */
}

.lab-logo {
  width: 100px; /* Set a fixed width */
  height: 100px; /* Set a fixed height */
  object-fit: contain; /* Ensures the logo scales while maintaining aspect ratio */
  margin: 0;
  transition: opacity 0.3s ease;
}

.lab-logo:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .labs-container {
    flex-direction: column;
  }

  .lab-card {
    max-width: 100%;
  }
}
</style>
