<template>
  <div class="sidebar">
    <ul>
      <li v-for="(section, index) in sidebarSections" :key="section.title">
        <!-- Make the section title clickable as a link -->
        <div class="section-header">
          <nuxt-link :to="section.path">
            {{ section.title }}
          </nuxt-link>
          <!-- Add a button to toggle the nested items -->
          <button @click="toggleSection(index)">
            {{ section.collapsed ? "+" : "-" }}
          </button>
        </div>
        <!-- Show/hide nested items based on collapsed state -->
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
  width: 250px;
}

ul {
  list-style-type: none;
  padding-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Style for clickable section title and toggle button */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1rem;
  padding: 0;
  margin-left: 10px;
}

button:hover {
  font-weight: bold;
}
</style>
