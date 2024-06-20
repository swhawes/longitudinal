<template>
  <div>
    <button
      class="toggle-button"
      @click="toggleCode"
    >
      {{ isVisible ? 'Hide Code' : 'Show Code' }}
    </button>
    <pre
      v-if="isVisible"
      class="code-block"
    >

      <code><slot /></code>
    </pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(false)
function toggleCode() {
  isVisible.value = !isVisible.value
}
</script>

<style scoped>
.toggle-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-bottom: 10px;
}
.code-block {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  white-space: pre-wrap;
}
</style>
