/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--p-primary-color, var(--color-primary))',
          hover: 'var(--p-primary-hover-color, var(--color-primary-hover))',
          contrast: 'var(--p-primary-contrast-color, #ffffff)'
        },
        surface: {
          DEFAULT: 'var(--p-content-background, var(--color-surface))',
          muted: 'var(--p-surface-100, #f1f5f9)',
          border: 'var(--p-content-border-color, var(--color-border))'
        },
        text: {
          primary: 'var(--p-text-color, var(--color-text-primary))',
          secondary: 'var(--p-text-muted-color, var(--color-text-secondary))'
        },
        brand: {
          primary: 'var(--p-primary-color, var(--color-primary))',
          secondary: 'var(--p-highlight-background, var(--color-secondary))',
          accent: 'var(--p-highlight-color, var(--color-accent))'
        }
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1920px'
      }
    }
  },
  plugins: [primeui],
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12',
    'sm:col-span-1',
    'sm:col-span-2',
    'sm:col-span-3',
    'sm:col-span-4',
    'sm:col-span-5',
    'sm:col-span-6',
    'sm:col-span-7',
    'sm:col-span-8',
    'sm:col-span-9',
    'sm:col-span-10',
    'sm:col-span-11',
    'sm:col-span-12',
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-3',
    'md:col-span-4',
    'md:col-span-5',
    'md:col-span-6',
    'md:col-span-7',
    'md:col-span-8',
    'md:col-span-9',
    'md:col-span-10',
    'md:col-span-11',
    'md:col-span-12',
    'lg:col-span-1',
    'lg:col-span-2',
    'lg:col-span-3',
    'lg:col-span-4',
    'lg:col-span-5',
    'lg:col-span-6',
    'lg:col-span-7',
    'lg:col-span-8',
    'lg:col-span-9',
    'lg:col-span-10',
    'lg:col-span-11',
    'lg:col-span-12'
  ],
};
