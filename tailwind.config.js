import lineClamp from '@tailwindcss/line-clamp';
import scrollbar from 'tailwind-scrollbar';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp,
    scrollbar,
    flowbite,
  ],
}
