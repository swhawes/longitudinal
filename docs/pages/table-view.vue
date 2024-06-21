<template>
  <div>
    <!-- Start of the single root element -->
    <h1>Table View</h1>
    <UTable :rows="people" />
  </div>
  <!-- End of the single root element -->
</template>

<script setup lang="ts">
// import { ref } from "vue";

import { people } from '~/data/peopleData'
</script>
