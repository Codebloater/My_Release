/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {}
    },
    fontFamily: {
      heroHeading: ["Rethink Sans", "sans-serif"],
      heroInfo: ["Rethink Sans", "sans-serif"],
      dateSpecial: ["Teko", "sans-serif"]
    }
  },
  plugins: []
};
