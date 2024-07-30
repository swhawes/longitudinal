<template>
  <div class="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Metadata Query Tool</h2>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2"
        >Select Query Type:</label
      >
      <multiselect
        v-model="selectedQueryType"
        :options="queryTypes"
        placeholder="Select a query type"
        label="name"
        track-by="value"
        @input="onQueryTypeChange"
      />
    </div>
    <div v-if="selectedQueryType" class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2"
        >Select {{ selectedQueryType.name }}:</label
      >
      <multiselect
        v-model="selectedQueryValue"
        :options="queryOptions"
        placeholder="Select a value"
        label="name"
        track-by="value"
        :searchable="true"
        :close-on-select="true"
        :show-labels="true"
      />
    </div>
    <button
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="fetchMetadata"
    >
      Query
    </button>

    <div v-if="metadataResults.length" class="mt-4">
      <h3 class="text-xl font-semibold mb-2">Results</h3>
      <div
        v-for="result in metadataResults"
        :key="result.var_name"
        class="p-4 mb-4 bg-gray-100 rounded-lg shadow"
      >
        <p><strong>Table Name:</strong> {{ result.table_name }}</p>
        <p><strong>Variable Name:</strong> {{ result.var_name }}</p>
        <p><strong>Variable Label:</strong> {{ result.var_label }}</p>
        <p><strong>Notes:</strong> {{ result.notes }}</p>
        <p><strong>Condition:</strong> {{ result.condition }}</p>
        <p><strong>Table Name NDA:</strong> {{ result.table_name_nda }}</p>
      </div>
    </div>

    <div v-if="error" class="mt-4 text-red-500">
      <h3 class="text-xl font-semibold mb-2">Error</h3>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

export default {
  components: { Multiselect },
  data() {
    return {
      selectedQueryType: null,
      selectedQueryValue: null,
      queryOptions: [],
      metadata: [],
      metadataResults: [],
      error: null,
      queryTypes: [
        { name: "Variable Name", value: "var_name" },
        { name: "Table Name", value: "table_name" },
        { name: "Variable Label", value: "var_label" },
        { name: "Condition", value: "condition" },
      ],
    };
  },
  async created() {
    try {
      const gistUrl =
        "https://gist.githubusercontent.com/swhawes/0bb1b51f1d108296e8a96e9cfb149368/raw/87a603717b71e30c0636a2a5433c984e827ac071/metadata.json";
      const response = await fetch(gistUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      console.log("Fetched JSON text:", text); // Debug log

      this.metadata = JSON.parse(text);
      console.log("Parsed metadata:", this.metadata); // Debug log
    } catch (err) {
      this.error = `Failed to fetch metadata: ${err.message}`;
    }
  },
  methods: {
    onQueryTypeChange() {
      this.queryOptions = [];
      this.selectedQueryValue = null;

      if (this.selectedQueryType) {
        const options = this.metadata
          .map((item) => item[this.selectedQueryType.value])
          .filter(
            (value, index, self) => value && self.indexOf(value) === index
          );

        this.queryOptions = options.map((value) => ({ name: value, value }));
        console.log("Query options:", this.queryOptions); // Debug log
      }
    },
    fetchMetadata() {
      if (!this.selectedQueryType || !this.selectedQueryValue) return;

      this.metadataResults = this.metadata.filter(
        (item) =>
          item[this.selectedQueryType.value] === this.selectedQueryValue.value
      );
      console.log("Metadata results:", this.metadataResults); // Debug log
    },
  },
};
</script>

<style>
@import "tailwindcss/tailwind.css";
</style>
