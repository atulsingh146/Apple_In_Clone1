/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        customGrey: '#F5F5F7',
        skyCustom: '#D4EAF7',
        grayCustom: '#F8F8F8',
        bblue: '#0077ED',
      },
       backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #D4EAF7, #F8F8F8)',
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Enable Tailwind in React files
  ],
  plugins: [],
}

