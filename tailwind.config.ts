import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        anonpro: ["var(--font-anon-pro)"],
      },
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
        greys: {
          light: "#F8F8F8",
          mid: "#C3C3C3",
          dark: "#5B5B5B",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "backdrop-gradient":
          "linear-gradient(121deg, #A0FF1F 0%, #00ED71 86.11%);",
        "primary-gradient":
          "var(--gradient-primary, linear-gradient(81deg, #A0FF1F 13.17%, #00ED71 86.83%))",
        "blob-pattern": 'url("/green-blobs.png")',
      },
      boxShadow: {
        strong: "0px 2px 10px 0px rgba(26, 26, 25, 0.24)",
        light: "0px 1px 10px 0px rgba(26, 26, 25, 0.08)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
