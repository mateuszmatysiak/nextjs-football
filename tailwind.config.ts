import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sea-9": "var(--sea-9)",
        "sea-9-95": "var(--sea-9-95)",
        "sea-9-50": "var(--sea-9-50)",
        "sea-9-30": "var(--sea-9-30)",

        "sea-7": "var(--sea-7)",
        "sea-7-75": "var(--sea-7-75)",
        "sea-7-50": "var(--sea-7-50)",

        "sea-5": "var(--sea-5)",
        "sea-5-95": "var(--sea-5-95)",

        "sea-4": "var(--sea-4)",
        "sea-4-80": "var(--sea-4-80)",
        "sea-4-50": "var(--sea-4-50)",

        "sea-2": "var(--sea-2)",

        "grey-5": "var(--grey-5)",
        "grey-4": "var(--grey-4)",
        "grey-3": "var(--grey-3)",

        "blue-6": "var(--blue-6)",
        "blue-5": "var(--blue-5)",
        "blue-4": "var(--blue-4)",

        "red-6": "var(--red-6)",
        "red-4": "var(--red-4)",

        "green-4": "var(--green-4)",
      },
      maxWidth: {
        layout: "var(--max-layout-width)",
      },
      backgroundImage: {
        "root-hero": "url('/hero.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
