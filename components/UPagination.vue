<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  page: Number,
  pageCount: Number,
  total: Number,
});

const emits = defineEmits(['update:page']);

function changePage(newPage: number) {
  emits('update:page', newPage);
}
</script>

<template>
  <nav aria-label="Page navigation">
    <!-- Pagination controls here, calling changePage() on click -->
  </nav>
</template>