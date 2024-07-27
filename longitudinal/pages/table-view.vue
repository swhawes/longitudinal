<template>
  <div>
    <table>
      <!-- Table rows for displaying items based on the current page -->
    </table>
    <UPagination
      :page="page"
      :page-count="pageCount"
      :total="items.length"
      @update:page="updatePage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UPagination from '~/Components/UPagination.vue'
import { people, columns } from '~/data/peopleData'

const defaultSelectedColumnIds = [1, 3]

const modifiedColumns = columns.map(column => ({ ...column, id: Number(column.key) }))

const selectedColumns = ref(modifiedColumns.filter(column => defaultSelectedColumnIds.includes(column.id)))

const page = ref(1)
const itemsPerPage = 10
const items = ref(Array.from({ length: 55 }, (_, i) => `Item ${i + 1}`))

const pageCount = computed(() => Math.ceil(items.value.length / itemsPerPage))

function updatePage(newPage: number) {
  page.value = newPage
}
</script>
