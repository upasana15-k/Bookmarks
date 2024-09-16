/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend:{
      spacing: {
        'bottom-space': '2rem', // Custom spacing value
      },
      
      display:["focus-group"]
  }
}
}

