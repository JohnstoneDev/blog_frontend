/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'text' : ['IBM Plex Mono', 'monospace'],
        'headings' : ['IBM Plex Sans', 'sans-serif'],
        'info' : ['Inter', 'sans-serif']
      },
      screens: {
        'mobile' : '375px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
