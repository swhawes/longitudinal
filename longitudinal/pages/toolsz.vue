<template>
  <section>
    <h1>🧰 <strong>Open-Source Tools for Longitudinal Data Science</strong></h1>
    <p>
      Welcome to the <strong>Open-Source Tools Hub</strong> for longitudinal
      data science! Here you’ll find detailed documentation, best practices, and
      guides for using various tools that streamline the analysis of time-series
      and repeated-measures data. Explore each section to learn how to integrate
      these tools into your workflows, optimize performance, and enhance
      collaboration.
    </p>

    <hr />

    <h2>📂 <strong>Explore the Tools</strong></h2>
    <ul>
      <li>
        🛠️
        <NuxtLink to="/tools/version-control">
          Version Control (Git/GitHub)
        </NuxtLink>
        <p>
          Learn how to use Git and GitHub for managing code, tracking changes,
          and collaborating on longitudinal data projects.
        </p>
      </li>
      <li>
        🗂️
        <NuxtLink to="/tools/data-formats">
          Data Formats (Apache Parquet and Arrow)
        </NuxtLink>
        <p>
          Discover efficient data formats for storing and handling large-scale
          longitudinal datasets.
        </p>
      </li>
      <li>
        💻
        <NuxtLink to="/tools/ides">
          Integrated Development Environments (IDEs)
        </NuxtLink>
        <p>
          Explore IDEs like VSCode, RStudio, and more for enhancing productivity
          in longitudinal data analysis.
        </p>
      </li>
      <li>
        📓
        <NuxtLink to="/tools/notebooks">
          Notebooks (Jupyter Notebooks, JupyterLab)
        </NuxtLink>
        <p>
          Leverage interactive notebooks for combining code, narrative, and
          visualizations in longitudinal analysis.
        </p>
      </li>
      <li>
        📖
        <NuxtLink to="/tools/literate-programming">
          Literate Programming (Quarto, knitr, Observable)
        </NuxtLink>
        <p>
          Integrate code, analysis, and documentation into seamless reports
          using literate programming techniques.
        </p>
      </li>
      <li>
        🗄️
        <NuxtLink to="/tools/databases">
          Traditional and In-Memory Databases
        </NuxtLink>
        <p>
          Select the right database solution for managing and analyzing
          longitudinal data efficiently.
        </p>
      </li>
    </ul>

    <hr />

    <h2>📈 <strong>Getting Started</strong></h2>
    <p>
      Whether you’re new to longitudinal data science or looking to optimize
      your current workflow, these tools provide everything you need for
      efficient, reproducible research.
    </p>
    <p>
      Start exploring the documentation to dive deeper into each tool and see
      how it fits into your longitudinal analysis pipeline!
    </p>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "no-sidebar",
});
</script>

<style scoped>
/* Add any styles specific to this page */
section {
  margin: 2rem 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1.5rem 0;
}

h1,
h2 {
  margin-bottom: 1rem;
}
</style>
