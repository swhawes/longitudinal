<template>
  <div class="video-gallery">
    <div v-for="video in videos" :key="video.title" class="video">
      <iframe :src="video.link" frameborder="0" allowfullscreen />
      <h3>{{ video.title }}</h3>
      <p><strong>Description:</strong> {{ video.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add the same CSS styles as before */
</style>
