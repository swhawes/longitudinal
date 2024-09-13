<template>
  <div>
    <textarea v-model="userCode" rows="8" cols="50" />
    <!-- Editable R code -->
    <button @click="runWebR">Run R Code</button>
    <pre><code>{{ userCode }}</code></pre>
    <!-- Display user-updated R code -->
    <div id="grid">Result will appear here...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userCode: `
          x <- c(1, 2, 3, 4, 5)
          y <- c(2, 4, 6, 8, 10)
          model <- lm(y ~ x)
          coef(model)
        `,
    };
  },
  methods: {
    async runWebR() {
      const { WebR } = await import("https://webr.r-wasm.org/latest/webr.mjs");
      const webr = new WebR();
      await webr.init();

      // Run the user-edited R code
      try {
        const result = await webr.evalR(this.userCode);
        document.getElementById("grid").innerHTML = (
          await result.toJs()
        ).values.join(", ");
      } catch (error) {
        document.getElementById("grid").innerHTML = `Error: ${error.message}`;
      }
    },
  },
};
</script>
