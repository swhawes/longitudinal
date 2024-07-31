// components/TestCard.vue
<template>
  <div class="test-card" :style="{ background: background }">
    <h2 class="text-lg font-semibold text-white">
      {{ title }}
    </h2>
    <a :href="link" target="_blank" class="view-more-btn">View more</a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  link: string;
  background: string;
}

defineProps<Props>();
</script>

<style scoped>
.test-card {
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 192px;
  width: 100%;
  color: white;
  text-align: center;
}

.view-more-btn {
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.view-more-btn:hover {
  background-color: #e0e0e0;
}
</style>
