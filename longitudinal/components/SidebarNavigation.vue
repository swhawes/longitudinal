<template>
  <div class="sidebar">
    <ul>
      <li v-for="(section, index) in sidebarSections" :key="section.title">
        <button @click="toggleSection(index)">
          {{ section.title }}
        </button>
        <ul v-show="!section.collapsed">
          <li v-for="item in section.children" :key="item.slug">
            <nuxt-link :to="item.path">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useContent } from "@nuxt/content";

const { data: sidebarData } = await useContent()
  .only(["title", "path", "children"])
  .fetch();

// Set up the reactive sidebar structure with collapsed state
const sidebarSections = ref(
  sidebarData.value.map((section) => ({
    ...section,
    collapsed: true, // Collapse all sections by default
  }))
);

// Function to toggle section visibility
function toggleSection(index) {
  sidebarSections.value[index].collapsed =
    !sidebarSections.value[index].collapsed;
}
</script>

<style scoped>
.sidebar {
  /* Sidebar styles */
}

button {
  cursor: pointer;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>
