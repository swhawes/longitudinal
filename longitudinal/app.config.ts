export default defineAppConfig({
  ui: {
    primary: '',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-500',
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
      'to': 'https://github.com/OpenDevSci/LongDev-ABCD',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on GitHub'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/channels/1288111827649171456/1288111940820013139',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on Discord'
    }, {
      'icon': 'i-simple-icons-slack',
      'to': 'https://longitudinaldev.slack.com',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on Slack'
    }]
  },
  footer: {
    // credits: 'credits to add ',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/OpenDevSci/LongDev-ABCD',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on GitHub'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/channels/1288111827649171456/1288111940820013139',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on Discord'
    }, {
      'icon': 'i-simple-icons-slack',
      'to': 'https://longitudinaldev.slack.com',
      'target': '_blank',
      'aria-label': 'Longitudinal.dev on Slack'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/OpenDevSci/LongDev-ABCD/discussions',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/OpenDevSci/LongDev-ABCD',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Project docs',
        to: 'https://github.com/OpenDevSci/LongDev-ABCD/docs',
        target: '_blank'
      }]
    }
  }
})
