<template>
    
  <div class="tab-container">
    <!-- Tab buttons -->
    <div class="tabs">
      <button
        :class="{ active: activeTab === 'Tab1' }"
        @click="setActiveTab('Tab1')"
      >
        Tab 1
      </button>
      <button
        :class="{ active: activeTab === 'Tab2' }"
        @click="setActiveTab('Tab2')"
      >
        Tab 2
      </button>
      <button
        :class="{ active: activeTab === 'Tab3' }"
        @click="setActiveTab('Tab3')"
      >
        Tab 3
      </button>
    </div>

    <!-- Tab contents -->
    <div v-show="activeTab === 'Tab1'" class="tabcontent">
      <h3>Tab 1</h3>
      <p>This is content for Tab 1. Some sample text to verify.</p>
    </div>
    <div v-show="activeTab === 'Tab2'" class="tabcontent">
      <h3>Tab 2</h3>
      <p>
        This is content for Tab 2. Another sample text to verify tab
        functionality.
      </p>
    </div>
    <div v-show="activeTab === 'Tab3'" class="tabcontent">
      <h3>Tab 3</h3>
      <p>
        This is content for Tab 3. Yet another sample text for the third tab.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("Tab1");

// Set active tab based on click event
const setActiveTab = (tabName) => {
  console.log(`Switching to: ${tabName}`); // Debug log
  activeTab.value = tabName;
};
</script>

<style scoped>
.tab-container {
  width: 100%;
  margin-top: 20px;
}

.tabs {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

button {
  background-color: #555;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  outline: none;
}

button.active {
  background-color: #00dc82; /* Active tab color */
}

.tabcontent {
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
  margin-top: 10px;
}
</style>
