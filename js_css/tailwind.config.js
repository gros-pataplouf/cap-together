/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "../capsite/templates/capsite/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

