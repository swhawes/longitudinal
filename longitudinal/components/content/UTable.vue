<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(column: any) in props.columns"
          :key="column.key"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row: any) in props.rows"
        :key="row.id"
      >
        <td
          v-for="column in props.columns"
          :key="column.key"
        >
          {{ row[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  columns: {
    type: Array,
    default: () => [{ key: 'column1', label: 'Column 1' }]
  },
  rows: {
    type: Array,
    default: () => []
  }
})

onMounted(() => {
  console.log('Columns:', props.columns)
  console.log('Rows:', props.rows)
  // If fetching data asynchronously, ensure it's done here or ensure the parent component provides it before this mounts.
})
</script>
