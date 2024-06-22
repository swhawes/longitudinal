<template>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <USelectMenu
        v-model="selectedColumns"
        :options="columns"
        multiple
        placeholder="Columns"
      />
    </div>

    <UTable
      :columns="selectedColumns"
      :rows="people"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { people, columns } from '~/data/peopleData'

// Define selectedColumns as a reactive reference to an empty array initially.
const selectedColumns = ref([])
</script>
