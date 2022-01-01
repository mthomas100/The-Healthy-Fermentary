module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      reenieBeanie: ["Reenie Beanie", "cursive"]
    },
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px'
    }
  },
  plugins: [  
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")
  ],
}