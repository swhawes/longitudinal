<!-- components/content/UTable.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  rows: people[]
}>()
</script>

<template>
  <div class="relative overflow-x-auto">
    <table
      class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700"
    >
      <thead class="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Role
          </th>
        </tr>
      </thead>
      <tbody
        class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
      >
        <tr
          v-for="person in rows"
          :key="person.id"
        >
          <td
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300"
          >
            {{ person.name }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
          >
            {{ person.title }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
          >
            {{ person.email }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
          >
            {{ person.role }}
          </td>
        </tr>
        <tr v-if="rows.length === 0">
          <td
            colspan="4"
            class="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
          >
            No items.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
