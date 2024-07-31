<template>
    <a :href="card.link" class="method-card">
      <div class="card-content">
        <div class="card-top">
          <h3>{{ card.title }}</h3>
        </div>
        <div class="card-bottom">
          <p class="view-more-button">View more →</p>
        </div>
      </div>
    </a>
  </template>
  
  <script setup lang="ts">
  interface MethodCard {
    title: string;
    link: string;
    background: string;
  }
  
  const props = defineProps<{ card: MethodCard }>();
  </script>
  
  <style scoped>
  .method-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
    background: linear-gradient(180deg, var(--top-color), black);
    transition: transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .method-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .card-top {
    flex: 1;
    padding: 1rem;
    background: transparent;
    /* display: flex; */
    align-items: center;
    justify-content: center;
  }
  
  .card-top h3 {
    color: #fff;
    text-align: center;
  }
  
  .card-bottom {
  height: 50%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem; /* Add padding to the top */
  padding-bottom: 0.5rem; /* Add padding to the bottom */
}

.view-more-button {
  background: white;
  color: black;
  border: 2px solid #D5A05A; /* Adjust border color to match the theme */
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;
}

.view-more-button:hover {
  background: #D5A05A; /* Adjust background color on hover to match the theme */
  color: white;
}
  </style>
  