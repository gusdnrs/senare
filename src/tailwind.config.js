// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/main.tsx" // main.tsx 명시적으로 추가!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
