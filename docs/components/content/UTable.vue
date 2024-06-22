<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th v-for="column in columns" :key="column.key" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="person in rows" :key="person.id">
        <td v-for="column in columns" :key="column.key" class="px-6 py-4 whitespace-nowrap">
          {{ person[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  columns: Array,
  rows: Array
})
</script>
