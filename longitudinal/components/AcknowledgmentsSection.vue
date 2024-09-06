<template>
  <section class="acknowledgments-section">
    <div class="container mx-auto">
      <h2 class="section-title">Acknowledgments</h2>
      <div class="labs-grid">
        <div v-for="lab in labs" :key="lab.name" class="lab-card">
          <img :src="lab.logo" :alt="lab.name + ' logo'" class="lab-logo" />
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
    name: "SUN Lab",
    logo: "/images/sunlab-logo.jpeg",
    description: "Thank you to Lab One for their support in the project.",
  },
  {
    name: "Eden Lab",
    logo: "/images/wallerlab-logo.png",
    description: "Lab Two has been instrumental in the project’s success.",
  },
  {
    name: "ABCD Study",
    logo: "/images/abcd-study-logo.png",
    description: "Lab Two has been instrumental in the project’s success.",
  },
  // Add more labs as needed
];
</script>

<style scoped>
.acknowledgments-section {
  padding: 3rem 1.5rem;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
}

.labs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

.lab-card {
  text-align: center;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.lab-card:hover {
  transform: translateY(-5px);
}

.lab-logo {
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
}
</style>
