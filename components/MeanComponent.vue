<template>
  <div class="container">
    <h2 class="title">Calculate Descriptive Statistics with Tidyverse</h2>
    <p>
      Click "Run" to calculate and display the descriptive statistics for the
      selected variables (Age, Education, CogTestScore).
    </p>

    <!-- Code Editor -->
    <textarea v-model="descStatsCode" rows="8" cols="60" class="code-editor" />
    <small>Edit the R code and click "Run" to see the results.</small>

    <!-- Run Button -->
    <button class="run-button" @click="calculateDescriptiveStats">Run</button>

    <!-- Display Output -->
    <h3>Descriptive Statistics</h3>
    <div id="desc-output" class="output-box">
      Descriptive statistics will appear here...
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// User-editable R code to calculate descriptive statistics with tidyverse
const descStatsCode = ref(`
    library(tidyverse)
    url <- "https://gist.githubusercontent.com/swhawes/447351298561aa1a9d90e87c650977ff/raw/c18a661edeae55718b0aa424273742e977a737da/longitudinal_dataset.csv"
    data <- read_csv(url) %>% as_tibble()
    desc_stats <- data %>%
      summarise(
        mean_Age = mean(Age, na.rm = TRUE),
        mean_Education = mean(Education, na.rm = TRUE),
        mean_CogTestScore = mean(CogTestScore, na.rm = TRUE)
      )
    desc_stats
  `);

async function calculateDescriptiveStats() {
  const { WebR } = await import("https://webr.r-wasm.org/latest/webr.mjs");
  const webr = new WebR();
  await webr.init();

  // Preload tidyverse package
  await webr.installPackages(["tidyverse"]);

  try {
    const result = await webr.evalR(descStatsCode.value);
    const descData = await result.toJs();

    console.log("Raw R Output:", descData); // Log the raw output

    if (descData && descData.values && Array.isArray(descData.values)) {
      // Process the data
    } else {
      throw new Error("Unexpected data structure returned from R.");
    }
  } catch (error) {
    document.getElementById(
      "desc-output"
    ).innerHTML = `Error: ${error.message}`;
  }
}
</script>

<style scoped>
.container {
  font-family: "Arial", sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.code-editor {
  width: 100%;
  padding: 10px;
  font-family: monospace;
  font-size: 14px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
}

.run-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
}

.run-button:hover {
  background-color: #0056b3;
}

.output-box {
  margin-top: 15px;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333;
  font-size: 14px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 8px;
  text-align: left;
}
</style>
