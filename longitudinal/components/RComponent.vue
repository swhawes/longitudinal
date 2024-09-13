<template>
  <div>
    <h2>Interactive Regression Example</h2>

    <!-- Code Editor -->
    <div>
      <textarea v-model="userCode" rows="8" cols="60" class="code-editor" />
      <small>Edit the R code and click "Run" to see the results.</small>
    </div>

    <!-- Run Button -->
    <button class="run-button" @click="runWebR">Run Regression</button>

    <!-- Dataset Table (use DataTables or similar) -->
    <h3>Dataset Preview</h3>
    <div id="data-table" class="table-preview">Loading dataset preview...</div>

    <!-- Display Output -->
    <h3>Regression Output</h3>
    <div id="regression-output" class="output-box">
      Result will appear here...
    </div>

    <!-- Chart for Visualization -->
    <h3>Regression Plot</h3>
    <img id="plot" alt="Plot will appear here" class="plot-image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userCode: `
          library(readr)
          url <- "https://gist.githubusercontent.com/swhawes/447351298561aa1a9d90e87c650977ff/raw/c18a661edeae55718b0aa424273742e977a737da/longitudinal_dataset.csv"
          data <- read_csv(url)
          model <- lm(CogTestScore ~ Education, data = data)
          summary(model)$coefficients
        `,
      datasetPreviewCode: `
          library(readr)
          url <- "https://gist.githubusercontent.com/swhawes/447351298561aa1a9d90e87c650977ff/raw/c18a661edeae55718b0aa424273742e977a737da/longitudinal_dataset.csv"
          data <- read_csv(url)
          head(data)
        `,
    };
  },
  mounted() {
    this.loadDatasetPreview();
  },
  methods: {
    async runWebR() {
      const { WebR } = await import("https://webr.r-wasm.org/latest/webr.mjs");
      const webr = new WebR();
      await webr.init();

      await webr.installPackages(["readr"]);

      try {
        const result = await webr.evalR(this.userCode);
        document.getElementById("regression-output").innerHTML = (
          await result.toJs()
        ).values.join(", ");
      } catch (error) {
        document.getElementById(
          "regression-output"
        ).innerHTML = `Error: ${error.message}`;
      }
    },
    async loadDatasetPreview() {
      const { WebR } = await import("https://webr.r-wasm.org/latest/webr.mjs");
      const webr = new WebR();
      await webr.init();

      await webr.installPackages(["readr"]);

      try {
        const previewResult = await webr.evalR(this.datasetPreviewCode);
        const previewData = await previewResult.toJs();

        // Handle R DataFrame conversion
        const rows = previewData.values;
        const headers = previewData.names;

        let tableHtml = "<table><tr>";
        headers.forEach((header) => {
          tableHtml += `<th>${header}</th>`;
        });
        tableHtml += "</tr>";

        rows.forEach((row) => {
          tableHtml += "<tr>";
          row.forEach((cell) => {
            tableHtml += `<td>${cell}</td>`;
          });
          tableHtml += "</tr>";
        });
        tableHtml += "</table>";

        document.getElementById("data-table").innerHTML = tableHtml;
      } catch (error) {
        document.getElementById(
          "data-table"
        ).innerHTML = `Error: ${error.message}`;
      }
    },
  },
};
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

.output-box,
.plot-image {
  margin-top: 15px;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333;
  font-size: 14px;
}

.table-preview {
  height: 200px;
  border: 1px solid #ddd;
  overflow-y: auto;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
}

.plot-image {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
</style>
