/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        light: "rgba(var(--white),<alpha-value>)",
        dark: "rgba(var(--black),<alpha-value>)",
        secondary: "rgba(112, 79, 254,<alpha-value>)",
        lightbg: "rgba(var(--light-bg),<alpha-value>)",
      }
    },
  },
  plugins: [],
}

