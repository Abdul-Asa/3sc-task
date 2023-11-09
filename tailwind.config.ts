import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#A0FF1F",
          pink: "#F70087",
          black: "#000",
          white: "#fff",
        },
        secondary: {
          green: "#00ED71",
          pink: "#F40256",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient":
          "var(--gradient-primary, linear-gradient(81deg, #A0FF1F 13.17%, #00ED71 86.83%))",
      },
    },
  },
  plugins: [],
};
export default config;
