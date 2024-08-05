<template>
  <div class="tutorial-gallery">
    <div v-for="tutorial in tutorials" :key="tutorial.title" class="tutorial">
      <a :href="tutorial.link" target="_blank" rel="noopener noreferrer">
        <h3>{{ tutorial.title }}</h3>
        <p><strong>Description:</strong> {{ tutorial.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tutorials: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add the same CSS styles as before */
</style>
