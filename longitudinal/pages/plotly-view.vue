<template>
  <div>
    <!-- Start of the single root element -->
    <h1>Table View</h1>
    <!-- <UTable :rows="people" /> -->

    <!-- Previously missing closing tag for the first <div> -->
    <h1>nuxt-plotly module playground!</h1>
    <client-only>
      <nuxt-plotly
        :data="data"
        :layout="docs"
        :config="config"
        style="width: 100%"
        @on-ready="myChartOnReady"
      />
    </client-only>
    <pie-chart />
  </div>
  <!-- End of the single root element -->
</template>

<script setup lang="ts">
// import { ref } from "vue";
import type {
  NuxtPlotlyConfig,
  NuxtPlotlyData,
  NuxtPlotlyLayout,
  NuxtPlotlyHTMLElement,
} from "nuxt-plotly";
// import { people } from '~/data/peopleData'

const x = [1, 2, 3, 4, 5];
const y = [10, 20, 30, 20, 10];
const data: NuxtPlotlyData = [
  { x: x, y: y, type: "scatter", mode: "markers", marker: { size: 20 } },
];
const layout: NuxtPlotlyLayout = {
  title: "My graph on app.vue with <client-only>",
};

const config: NuxtPlotlyConfig = { scrollZoom: true, displayModeBar: false };

function myChartOnReady(plotlyHTMLElement: NuxtPlotlyHTMLElement) {
  const { $plotly } = useNuxtApp();
  console.log({ $plotly });
  console.log({ plotlyHTMLElement });

  plotlyHTMLElement.on?.("plotly_afterplot", function () {
    console.log("done plotting");
  });

  plotlyHTMLElement.on?.("plotly_click", function () {
    alert("You clicked this Plotly chart!");

    // use plotly function via `$plotly` to download chart image
    $plotly.downloadImage(plotlyHTMLElement as HTMLElement, {
      format: "png",
      width: 800,
      height: 600,
      filename: "newplot",
    });
  });
}
</script>
