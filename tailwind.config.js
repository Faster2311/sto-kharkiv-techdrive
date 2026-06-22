/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Палітра sto_037 — нічна зміна
        ink: {
          950: "#0d0e11",
          900: "#151619",
          800: "#1c1e23",
          700: "#262932",
          600: "#33363f",
        },
        navy: {
          400: "#5a6cab",
          500: "#38488a",
          600: "#2b3a78",
          700: "#1f2b5e",
          900: "#101632",
        },
        flame: {
          300: "#f0a18a",
          400: "#dd7b62",
          500: "#ce614b",
          600: "#a84a37",
          900: "#3b1a11",
        },
        mist: {
          400: "#aca2c3",
          300: "#c5bedb",
        },
      },
      fontFamily: {
        display: ["'Archivo'", "'Onest'", "system-ui", "sans-serif"],
        body: ["'Onest'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        flame: "0 12px 40px -12px rgba(206,97,75,0.45)",
        panel: "0 30px 60px -30px rgba(0,0,0,0.7)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
};
