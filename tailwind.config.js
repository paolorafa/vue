/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {height: {
        '21.25rem': '21.25rem',
      }},
    },
    variants: {
      extend: {},
    },
    plugins: [ require('flowbite/plugin')],
}


