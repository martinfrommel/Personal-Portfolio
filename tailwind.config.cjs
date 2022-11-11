/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  presets: [require('@downwindcss/easings')],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'gray-lightest': '#f8f8f9',
        'gray-lighter': '#e4e4e5',
        'gray-light': '#d0d1d1',
        gray: '#bdbebe',
        'gray-dark': '#969697',
        'gray-darker': '#6e6f6f',
        'gray-darkest': '#484848',
        black: '#202021',

        'brand-light': '#c4d0da',
        brand: '#004f71',
        'brand-dark': '#112939',

        'cta-light': '#e1c1be',
        cta: '#710016',
        'cta-dark': '#3b0e0e',

        'info-light': '#d6eff8',
        info: '#29bfe1',
        'info-dark': '#245b6a',

        'warning-light': '#f9eecf',
        warning: '#d6be3b',
        'warning-dark': '#665b23',

        'success-light': '#d5f3d4',
        success: '#3bcc55',
        'success-dark': '#27612d',

        'danger-light': '#fdd2d0',
        danger: '#d8454e',
        'danger-dark': '#682829',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
};
