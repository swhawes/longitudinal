<template>
  <div class="subheader bg-gray-800 text-white py-2 relative">
    <!-- Left Icon Button -->
    <button
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-l z-10"
      @click="scrollLeft"
    >
      <i class="fas fa-chevron-left text-white" />
    </button>

    <!-- Subheader Content -->
    <div
      ref="scrollContainer"
      class="flex flex-col md:flex-row justify-between items-center px-4 overflow-x-auto ml-8 mr-8"
    >
      <ul class="flex flex-nowrap space-x-4">
        <li>
          <a
            href="/tutorials/longitudinal-analyses-models/growth-curve-models/latent_growth_curve_models_tutorial"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Growth Curves</a
          >
        </li>
        <li>
          <a href="#" class="text-white hover:text-gray-300 whitespace-nowrap"
            >Cheat Sheets</a
          >
        </li>
        <li>
          <a
            href="/tutorials/longitudinal-analyses-models/mixed-effects-and-multilevel/linear-mixedeffects-models"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Linear Mixed Models</a
          >
        </li>
        <li>
          <a href="/tools#ides" class="text-white hover:text-gray-300 whitespace-nowrap"
            >IDEs</a
          >
        </li>
        <AppDropdown>
          <template #link>
            <li>
              <a
                href="#"
                class="text-white hover:text-gray-300 whitespace-nowrap"
                >Data Wrangling</a
              >
            </li>
          </template>
          <template #dropdown>
            <ul class="py-1">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Overview</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Python</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Machine Learning</a
                >
              </li>
            </ul>
          </template>
        </AppDropdown>
        <AppDropdown>
          <template #link>
            <li>
              <a
                href="/tools#programming-languages"
                class="text-white hover:text-gray-300 whitespace-nowrap"
                >Programming Languages</a
              >
            </li>
          </template>
          <template #dropdown>
            <ul class="py-1">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Python</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >JavaScript</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >Java</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >C++</a
                >
              </li>
            </ul>
          </template>
        </AppDropdown>
        <li>
          <a href="#" class="text-white hover:text-gray-300 whitespace-nowrap"
            >Workshops</a
          >
        </li>
        <li>
          <a
            href="/tutorials"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Tutorials</a
          >
        </li>
        <li>
          <a
            href="/tutorials/data-visualization/viz_customizing-plots-ggplot2"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Visualizations</a
          >
        </li>
        <li>
          <a
            href="/tools#notebooks"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Quarto</a
          >
        </li>
        <li>
          <a
            href="/tools/6.data-formats"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Markdown</a
          >
        </li>
        <li>
          <a href="#" class="text-white hover:text-gray-300 whitespace-nowrap"
            >Book Club</a
          >
        </li>
        <li>
          <a
            href="#"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Missing Data</a
          >
        </li>
        <li>
          <a
            href="https://longitudinaldev.slack.com"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Slack Channel</a
          >
        </li>
        <li>
          <a
            href="https://github.com/OpenDevSci/LongDev-ABCD"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Github</a
          >
        </li>
        <li>
          <a
            href="/playground"
            class="text-white hover:text-gray-300 whitespace-nowrap"
            >Playground</a
          >
        </li>
        <!-- Add more links as needed -->
      </ul>
    </div>

    <!-- Right Icon Button -->
    <button
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-r z-10"
      @click="scrollRight"
    >
      <i class="fas fa-chevron-right text-white" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppDropdown from "./AppDropdown.vue";

const scrollContainer = ref(null);

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -200, behavior: "smooth" });
};

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 200, behavior: "smooth" });
};
</script>

<style scoped>
.subheader {
  position: relative;
}
</style>
