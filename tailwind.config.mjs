/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
        // title: ['roboto', 'Inter', ...defaultTheme.fontFamily.sans],
        // dancing: [
        //   'Dancing Script Variable',
        //   'Inter',
        //   ...defaultTheme.fontFamily.sans,
        // ],
      },
      colors: {
        colorYellow: 'var(--yellow)',
        colorBlue: 'var(--blue)',
        colorRed: 'var(--red)',
      },
    },
  },
  plugins: [],
};
