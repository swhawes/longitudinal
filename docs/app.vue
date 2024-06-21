<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

import type {
  NuxtPlotlyConfig,
  NuxtPlotlyData,
  NuxtPlotlyLayout,
  NuxtPlotlyHTMLElement
} from 'nuxt-plotly'

const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)

const x = [1, 2, 3, 4, 5]
const y = [10, 20, 30, 20, 10]
const data: NuxtPlotlyData = [
  { x: x, y: y, type: 'scatter', mode: 'markers', marker: { size: 20 } }
]
const layout: NuxtPlotlyLayout = {
  title: 'My graph on app.vue with <client-only>'
}

const config: NuxtPlotlyConfig = { scrollZoom: true, displayModeBar: false }

function myChartOnReady(plotlyHTMLElement: NuxtPlotlyHTMLElement) {
  const { $plotly } = useNuxtApp()
  console.log({ $plotly })
  console.log({ plotlyHTMLElement })

  plotlyHTMLElement.on?.('plotly_afterplot', function () {
    console.log('done plotting')
  })

  plotlyHTMLElement.on?.('plotly_click', function () {
    alert('You clicked this Plotly chart!')

    // use plotly function via `$plotly` to download chart image
    $plotly.downloadImage(plotlyHTMLElement as HTMLElement, {
      format: 'png',
      width: 800,
      height: 600,
      filename: 'newplot'
    })
  })
}
</script>

<template>
  <div>Longitudinal Data Science</div>
  <div>
    <!-- Close the opening <div> tag here -->
    <h1>nuxt-plotly module playground!</h1>
    <client-only>
      <nuxt-plotly
        :data="data"
        :layout="layout"
        :config="config"
        style="width: 100%"
        @on-ready="myChartOnReady"
      />
    </client-only>
    <pie-chart />
  </div>
  <NuxtLoadingIndicator />

  <AppHeader />

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <AppFooter />

  <ClientOnly>
    <LazyUContentSearch
      :files="files"
      :navigation="navigation"
    />
  </ClientOnly>

  <UNotifications />
</template>
