<template>
  <div>
    <select v-model="selectedQueryType" @change="onQueryTypeChange">
      <option value="var_name">Variable Name</option>
      <option value="table_name">Table Name</option>
      <option value="var_label">Variable Label</option>
      <option value="condition">Condition</option>
    </select>

    <select v-if="selectedQueryType" v-model="selectedQueryValue">
      <option v-for="option in queryOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>

    <button @click="fetchMetadata">Query</button>

    <div v-if="metadataResults.length">
      <h2>Results</h2>
      <pre>{{ metadataResults }}</pre>
    </div>

    <div v-if="error">
      <h2>Error</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedQueryType: "",
      selectedQueryValue: "",
      queryOptions: [],
      metadata: [],
      metadataResults: [],
      error: null,
    };
  },
  async created() {
    try {
      // Replace with the raw URL of your GitHub Gist
      const gistUrl =
        "https://gist.githubusercontent.com/swhawes/0bb1b51f1d108296e8a96e9cfb149368/raw/87a603717b71e30c0636a2a5433c984e827ac071/metadata.json";
      const response = await fetch(gistUrl);

      // Check if the response is not OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the raw text to debug
      const text = await response.text();
      console.log("Fetched JSON text:", text); // Debug log

      // Parse the JSON data
      this.metadata = JSON.parse(text);
    } catch (err) {
      this.error = `Failed to fetch metadata: ${err.message}`;
    }
  },
  methods: {
    onQueryTypeChange() {
      this.queryOptions = [];
      this.selectedQueryValue = "";

      if (this.selectedQueryType) {
        // Extract unique values for the selected query type
        this.queryOptions = [
          ...new Set(this.metadata.map((item) => item[this.selectedQueryType])),
        ];
      }
    },
    fetchMetadata() {
      if (!this.selectedQueryType || !this.selectedQueryValue) return;

      // Filter metadata based on the selected query type and value
      this.metadataResults = this.metadata.filter(
        (item) => item[this.selectedQueryType] === this.selectedQueryValue
      );
    },
  },
};
</script>
