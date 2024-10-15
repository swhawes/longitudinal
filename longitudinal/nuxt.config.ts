export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss',
    ['nuxt-plotly', { inject: true }]
  ],
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'ArticleList', 'SimpleCarousel', 'TabComponent', 'TestComponent'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  colorMode: {
    disableTransition: true
  },
  nitro: {
    prerender: {
      routes: [
        '/' // Home page
        // '/about', // Example additional route (add more routes as necessary)
        // '/longit/tools', // Example
        // '/longit/tutorials' // Example
      ],
      crawlLinks: true, // Enable crawling to find more links automatically
      ignore: [
        // '/tools/6.data-formats',
        // '/api/_content/query/JPfzfXpE83.1728957996020.json',
        '/plotly-view',
        '/contribute',
        '/sandbox',
        '/longitudinal/about',
        '/longitudinal/getting-started',
        '/tutorials/data-visualization/viz_customizing-plots-ggplot2',
        '/longitudinal/tutorials/data-visualization/viz_customizing-plots-ggplot2',
        '/longitudinal/tutorials/longitudinal-analyses-models/growth-curve-models/multivariate_latent_growth_curve_models_tutorial',
        '/longitudinal/tutorials/longitudinal-analyses-models/mixed-effects-and-multilevel/hierarchical_linear_modeling_tutorial',
        '/longitudinal/tutorials/longitudinal-analyses-models/growth-curve-models/piecewise_growth_models_tutorial',
        '/longitudinal/tutorials/longitudinal-analyses-models/growth-curve-models/multilevel_growth_models_tutorial',
        '/longitudinal/tutorials/longitudinal-analyses-models/crosslagged-and-panel-models/autoregressive_cross_lagged_models_tutorial',
        '/longitudinal/abcd-study/resources',
        '/longitudinal/abcd-study/traditional-linear-models',
        '/longitudinal/tutorials/longitudinal-analyses-models/time-to-event-and-survival-models/survival_analysis_time_dependent_covariates_tutorial',
        '/longitudinal/tutorials/longitudinal-analyses-models/advanced-models/generalized_estimating_equations_tutorial',
        '/longitudinal/tutorials/longitudinal-analyses-models/mixture-models/growth_mixture_models_tutorial',
        '/longitudinal/tutorials/longitudinal-analyses-models/mixed-effects-and-multilevel/linear-mixedeffects-models',
        '/longitudinal/tools/programming-languages/r/rtestfile1',
        '/longitudinal/tools/programming-languages/r/rtestfile2',
        '/longitudinal/tutorials/longitudinal-analyses-models/mixture-models/latent_class_growth_analysis_autorial',
        '/longitudinal/tutorials/special-case-tutorials/advanced_bootstrapping-and-resampling',
        '/longitudinal/tutorials/exploratory-data-analysis/exploratory_diagnostic-plots',
        '/longitudinal/tutorials/data-wrangling/cleaning-and-transforming-data',
        '/longitudinal/tutorials/longitudinal-analyses-models/advanced-models/latent-curve-model-with-structured-residuals',
        '/longitudinal/tutorials/longitudinal-analyses-models/advanced-models/random_intercept_cross_lagged_panel_model_tutorial',
        '/longitudinal/abcd-study/traditional-nonlinear-models/examples_signedranktest',
        '/longitudinal/tutorials/exploratory-data-analysis/exploratory_model-evaluation'
        // Add more routes to ignore as needed
      ]
    }
  },
  routeRules: {
    '/api/search.json': { prerender: true }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/longitudinal/' // Set this to your GitHub repo slug
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  future: {
    compatibilityVersion: 4
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  content: {
    highlight: {
      langs: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'shell',
        'mdc',
        'md',
        'yaml',
        'r'
      ],
      // Enable Document-Driven Mode
      documentDriven: true // Add this line to enable Document-Driven Mode
    }
  },
  vite: {
    optimizeDeps: {
      include: ['plotly.js-dist-min']
    }
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  // Add the plugins array here
  plugins: ['~/plugins/customDirectives.js'],
  compatibilityDate: '2024-07-11'
})
