/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#007dff",

          "primary-content": "#000516",

          "secondary": "#4900ff",

          "secondary-content": "#d2daff",

          "accent": "#a10000",

          "accent-content": "#f2d2cd",

          "neutral": "#11252d",

          "neutral-content": "#cacfd1",

          "base-100": "#242424",

          "base-200": "#1e1e1e",

          "base-300": "#181818",

          "base-content": "#cecece",

          "info": "#008ec3",

          "info-content": "#00070e",

          "success": "#00aa00",

          "success-content": "#000b00",

          "warning": "#ffb200",

          "warning-content": "#160c00",

          "error": "#c90a2d",

          "error-content": "#fbd6d3",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}