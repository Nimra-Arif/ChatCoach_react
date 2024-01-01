/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      // sans: ["Inter", "sans-serif"],
      mont: ["sans-serif"]
    },
    screens: {
      cush: { raw: "((min-height: 1300px))" },
      cush1: { raw: "((min-height: 1200px))" },
      vs: "360px",
      sm: "640px",
      smd: "490px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1800px"
      // => @media (min-width: 1920px) { ... }
    },
    // colors: {
    //   primary: "#011526",
    //   white: "#fffff",
    // },
    extend: {
      backgroundImage: {
        message: "url('/src/Assets/message-back.svg')"
      },
      border: {
        "below-thead": "0 0 2px 0"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(50%)" },
          "50%": { transform: "translateX(50%)" }
        }
      },
      colors: {
        deepBlue: "#2E6FF2",
        deepPink: {
          50: "#f6e7ee",
          100: "#e3b3ca",
          200: "#d68eb0",
          300: "#c35b8c",
          400: "#b83b75",
          500: "#a60a53",
          600: "#97094c",
          700: "#76073b",
          800: "#5b062e",
          900: "#460423"
        },
        lightBlue: "#EDF1F6",
        neutral: {
          1: "#ffffff",
          2: "#fcfdfd",
          3: "#f5f6f6",
          4: "#f0f1f2",
          5: "#d9dcde",
          6: "#c0c5c9",
          7: "#8d969d",
          8: "#5a6772",
          9: "#465461",
          10: "#273847",
          11: "#1f3140",
          12: "#152837",
          13: "#011526"
        }
      }
    }
  },
  plugins: []
};
