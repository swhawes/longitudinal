<template>
  <div class="sandbox-container">
    <h1 class="sandbox-title">Sandbox: Interactive R Playground</h1>

    <p class="sandbox-description">
      Welcome to the interactive R playground. Here, you can test and run your R
      code directly in the browser. Modify the provided R code and see the
      output instantly.
    </p>

    <!-- MeanComponent Integration -->
    <div>
      <MeanComponent />
    </div>

    <!-- Test Section -->
    <div>test</div>

    <!-- RComponent Integration -->
    <div class="r-component-wrapper">
      <RComponent />
    </div>
  </div>
</template>

<script setup>
import RComponent from "~/components/RComponent.vue";
import MeanComponent from "~/components/MeanComponent.vue";
</script>

<style scoped>
.sandbox-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

.sandbox-title {
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.sandbox-description {
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

.r-component-wrapper {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
</style>
