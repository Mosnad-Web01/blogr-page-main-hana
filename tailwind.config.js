/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
      fontSize: {
        base: '18px', // Base font size for paragraphs
        '4xl': '2.5rem', // 40px
        '5xl': '3rem', // 48px for large headings
      },
      colors: {
        primary: {
          lightRed: 'hsl(0, 100%, 67%)',
          orangeyYellow: 'hsl(39, 100%, 56%)',
          greenTeal: 'hsl(166, 100%, 37%)',
          cobaltBlue: 'hsl(234, 85%, 45%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          paleBlue: 'hsl(221, 100%, 96%)',
          lightLavender: 'hsl(241, 100%, 89%)',
          darkGrayBlue: 'hsl(224, 30%, 27%)',
        },
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(to right, #ff8f70, #ff3d54)',
      },
    },
  },
  plugins: [],
};

