/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          purple: "#9011FF",
          "purple-light": "#B159FF",
        },
        // Background colors
        bg: {
          dark: "#121014",
          darker: "#0D0D0D",
          darkest: "#050505",
          overlay: "#0F0D0F",
          card: "#2c2037",
          button: "#18181B",
          "mobile-menu": "#331251",
          "faq-main": "#18171C",
          "faq-hover": "#1A1A1A",
          "faq-hover-alt": "#23212b",
        },
        // Text colors
        text: {
          light: "#EFEFEF",
          "light-alt": "#eeeeee",
          gray: "#B1B1B1",
          "gray-medium": "#A4A4A4",
          "gray-alt": "#b0b0b0",
          "gray-dark": "#71717A",
          footer: "#B6B6B6",
          placeholder: "#6F6F6F",
        },
        // Border colors
        border: {
          light: "#e7dfdf",
          gray: "#252525",
          purple: "#84619B",
        },
        // Ring colors
        ring: {
          color: "#2B1627",
        },
        // Button colors
        button: {
          gray: "#393D41",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        geist: ["Geist", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
