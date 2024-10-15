<template>
  <div class="container">
    <h2 class="title">Interactive Regression Example</h2>

    <!-- Code Editor -->
    <div>
      <textarea v-model="userCode" rows="8" cols="60" class="code-editor" />
      <small>Edit the R code and click "Run" to see the results.</small>
    </div>

    <!-- Run Button -->
    <button class="run-button" @click="runWebR">Run Regression</button>

    <!-- Display Output -->
    <h3>Regression Output</h3>
    <div id="regression-output" class="output-box">
      Result will appear here...
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userCode = ref(`
      library(readr)
      url <- "https://gist.githubusercontent.com/swhawes/447351298561aa1a9d90e87c650977ff/raw/c18a661edeae55718b0aa424273742e977a737da/longitudinal_dataset.csv"
      data <- read_csv(url)
      model <- lm(CogTestScore ~ Education, data = data)
      summary(model)$coefficients
    `);

async function runWebR() {
  const { WebR } = await import("https://webr.r-wasm.org/latest/webr.mjs");
  const webr = new WebR();
  await webr.init();

  await webr.installPackages(["readr"]);

  try {
    const result = await webr.evalR(userCode.value);
    document.getElementById("regression-output").innerHTML = (
      await result.toJs()
    ).values.join(", ");
  } catch (error) {
    document.getElementById(
      "regression-output"
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
</style>
