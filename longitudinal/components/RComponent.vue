<template>
  <div id="grid">Loading webR...</div>
</template>

<script>
export default {
  mounted() {
    this.runWebR();
  },
  methods: {
    async runWebR() {
      // Import webR library
      const { WebR } = await import("https://webr.r-wasm.org/latest/webr.mjs");
      const webr = new WebR();
      await webr.init();

      // Simple R code: 1 + 1
      const result = await webr.evalR("1 + 4");
      document.getElementById("grid").innerHTML = (await result.toJs()).values;
    },
  },
};
</script>
