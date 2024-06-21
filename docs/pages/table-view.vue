<!-- pages/table-view.vue -->
<template>
  <div>
    <h1>Table View</h1>
    <UTable :rows="people" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { people } from '~/data/peopleData'
</script>
