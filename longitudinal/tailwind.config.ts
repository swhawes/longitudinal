import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Import the plugin
import forms from '@tailwindcss/forms'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // Define your color scheme including the 'primary' color to avoid warnings
        primary: '#00dc82', // Add primary color here
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82', // Matching your green 400
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        // You can also extend other colors like gray or black if needed
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      }
    }
  },
  plugins: [
    // Add the forms plugin
    forms
  ]
}
