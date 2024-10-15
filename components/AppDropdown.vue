<template>
  <div class="relative" @mouseenter="show = true" @mouseleave="show = false">
    <slot name="link" />
    <div
      v-if="show"
      class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
    >
      <slot name="dropdown" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<style scoped>
/* Add any necessary styles here */
</style>
