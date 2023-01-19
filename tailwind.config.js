/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home": "url('/images/home-bg.svg')",
        "bg-about": "url('/images/about-blur.svg')",
      },
    },
  },
  plugins: [],
};
