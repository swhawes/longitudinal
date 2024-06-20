export default defineAppConfig({
  ui: {
    primary: '',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-red-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Longitudinal Analysis - Examples and templates'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt-ui-pro/docs',
      'target': '_blank',
      'aria-label': 'Docs template on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright © 2023',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/OpenDevSci/LongDev-ABCD',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on GitHub'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on Discord'
    }, {
      'icon': 'i-simple-icons-slack',
      'to': 'https://slack.com/',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on Discord'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})
