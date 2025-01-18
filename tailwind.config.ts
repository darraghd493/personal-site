import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const textShadow: PluginCreator = function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "text-shadow": (value) => ({
        textShadow: value,
      }),
    },
    { values: theme("textShadow") }
  );
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#65B2C3",
        secondary: "#a1d7e3",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        sm: "1px 1px 0px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 0px var(--tw-shadow-color)",
        lg: "4px 4px 0px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [textShadow],
} satisfies Config;
