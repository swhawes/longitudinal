<template>
  <div v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any specific styles if necessary */
</style>
