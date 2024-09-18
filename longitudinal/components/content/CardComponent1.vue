<template>
  <div>
    <!-- Button to toggle the visibility of text -->
    <button @click="toggleText">
      Toggle Text
    </button>

    <!-- Conditionally display the text "Hello" based on the showText variable -->
    <p v-if="showText">Hello</p>

    <!-- Render content passed from the markdown using the slot and conditionally display it -->
    <slot v-if="showText"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Create a reactive variable to track whether the text should be shown or hidden
const showText = ref(false)

// Function to toggle the visibility of the text
const toggleText = () => {
  showText.value = !showText.value
}
</script>

<style scoped>
/* Add optional styles for the button and text */
button {
  padding: 10px 20px;
  background-color: #00dc82;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #00a155;
}

p {
  font-size: 18px;
  margin-top: 10px;
  color: #333;
}
</style>
