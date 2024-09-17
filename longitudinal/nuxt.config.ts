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
      const globals = components.filter(c => ['UButton', 'UIcon', 'ArticleList', 'MethodCardList', 'SimpleCarousel', 'TabComponent'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  colorMode: {
    disableTransition: true
  },
  routeRules: {
    '/': { prerender: true },
    '/api/search.json': { prerender: true }
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
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
      ]
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
  plugins: ['~/plugins/customDirectives.js']
})
