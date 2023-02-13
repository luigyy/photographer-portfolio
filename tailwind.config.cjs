/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        customPulse: "customPulse 4s infinite",
      },
      keyframes: {
        customPulse: {
          "50%": {
            opacity: ".2",
          },
        },
      },
      fontFamily: {
        Cormorant: ["Cormorant Garamond", "sans serif"],
        main: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
